import React, { useEffect, useState } from 'react';

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch('http://localhost:7000/api/contact')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure to delete?')) {
      await fetch(`http://localhost:7000/api/contact/${id}`, {
        method: 'DELETE',
      });
      fetchMessages();
    }
  };

  const startEdit = (msg) => {
    setEditingId(msg._id);
    setEditedMessage(msg.message);
  };

  const saveEdit = async (id) => {
    await fetch(`http://localhost:7000/api/contact/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: editedMessage }),
    });
    setEditingId(null);
    setEditedMessage('');
    fetchMessages();
  };

  // Pagination logic
  const totalPages = Math.ceil(messages.length / messagesPerPage);
  const currentMessages = messages.slice(
    (currentPage - 1) * messagesPerPage,
    currentPage * messagesPerPage
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Submitted Contact Messages</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentMessages.map((msg, index) => (
              <tr key={msg._id}>
                <td>{(currentPage - 1) * messagesPerPage + index + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>
                  {editingId === msg._id ? (
                    <input
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    msg.message
                  )}
                </td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
                <td>
                  {editingId === msg._id ? (
                    <button onClick={() => saveEdit(msg._id)} className="btn btn-sm btn-success">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => startEdit(msg)} className="btn btn-sm btn-warning me-2">
                      Edit
                    </button>
                  )}
                  <button onClick={() => deleteMessage(msg._id)} className="btn btn-sm btn-danger ms-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
