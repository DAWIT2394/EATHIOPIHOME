import React, { useState } from "react";

export default function Reservation() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        person: "",
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:7000/api/reserve", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert("Reservation submitted successfully!");
                setFormData({
                    date: "",
                    time: "",
                    person: "",
                    name: "",
                    email: "",
                    phone: "",
                });
            } else {
                alert("Failed to submit reservation.");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("An error occurred.");
        }
    };
    

    return (
        <div>
            <div className="all-page-title page-breadcrumb">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Reservation</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reservation-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-title text-center">
                                <h2>Reservation</h2>
                              <strong>  <p>Explore the vibrant dishes and cultural moments in our Gallery to see what makes Eathiopian Restaurant truly special.</p></strong>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="contact-block">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Left side - Booking Info */}
                                        <div className="col-md-6">
                                            <h3>Book a table</h3>

                                            <div className="form-group">
                                                <label htmlFor="date">Date</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="date"
                                                    className="form-control"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="time">Time</label>
                                                <input
                                                    type="time"
                                                    id="time"
                                                    name="time"
                                                    className="form-control"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
    <label htmlFor="person">Number of People*</label>
    <input
        type="number"
        id="person"
        name="person"
        className="form-control"
        min="1"
        value={formData.person}
        onChange={handleChange}
        required
    />
</div>

                                        </div>

                                        {/* Right side - Contact Info */}
                                        <div className="col-md-6">
                                            <h3>Contact Details</h3>

                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Your Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="col-md-12">
                                            <div className="submit-button text-center">
                                                <button type="submit" className="btn btn-common">
                                                    Book Table
                                                </button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
