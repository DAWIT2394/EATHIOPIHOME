import React, { useEffect, useState } from "react";

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [editForm, setEditForm] = useState(null); // current edited reservation
    const reservationsPerPage = 5;

    const fetchReservations = () => {
        setLoading(true);
        fetch("http://localhost:7000/api/reservations")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch reservations");
                return res.json();
            })
            .then((data) => {
                setReservations(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    // Pagination logic
    const indexOfLastReservation = currentPage * reservationsPerPage;
    const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
    const currentReservations = reservations.slice(indexOfFirstReservation, indexOfLastReservation);
    const totalPages = Math.ceil(reservations.length / reservationsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this reservation?")) return;

        try {
            const res = await fetch(`http://localhost:7000/api/reserve/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                fetchReservations();
            } else {
                alert("Delete failed");
            }
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:7000/api/reserve/${editForm._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm),
            });
            if (res.ok) {
                setEditForm(null);
                fetchReservations();
            } else {
                alert("Update failed");
            }
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Submitted Reservations</h2>

            {loading && <p>Loading reservations...</p>}
            {error && <p className="text-danger">Error: {error}</p>}
            {!loading && currentReservations.length === 0 && <p>No reservations found.</p>}

            {!loading && currentReservations.length > 0 && (
                <>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>People</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentReservations.map((r, index) => (
                                <tr key={r._id}>
                                    <td>{indexOfFirstReservation + index + 1}</td>
                                    <td>{r.date}</td>
                                    <td>{r.time}</td>
                                    <td>{r.person}</td>
                                    <td>{r.name}</td>
                                    <td>{r.email}</td>
                                    <td>{r.phone}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => setEditForm(r)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(r._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <nav className="text-center">
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                                <li
                                    key={num}
                                    className={`page-item ${currentPage === num ? "active" : ""}`}
                                >
                                    <button onClick={() => handlePageChange(num)} className="page-link">
                                        {num}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            )}

            {/* Edit Modal */}
            {editForm && (
                <div className="modal d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleEditSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Reservation</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setEditForm(null)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group mb-2">
                                        <label>Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={editForm.date}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={editForm.time}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>People</label>
                                        <input
                                            type="number"
                                            name="person"
                                            value={editForm.person}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editForm.name}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={editForm.email}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={editForm.phone}
                                            onChange={handleEditChange}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setEditForm(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
