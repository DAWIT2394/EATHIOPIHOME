import React, { useState } from 'react';
import axios from 'axios';

const MenuUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ loading: false, message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please upload an image.");

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('img', file); // ✅ MUST match multer.single('img')

    try {
      setStatus({ loading: true, message: '' });

      const response = await axios.post('http://localhost:7000/api/posts', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setStatus({ loading: false, message: 'Menu item uploaded successfully!' });
      setFormData({ name: '', category: '', description: '', price: '' });
      setFile(null);
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, message: 'Upload failed. Please try again.' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Upload New Menu Item</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Category:</label>
          <select className="form-control" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="drinks">Drinks</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="Breakfast">Breakfast</option>

          </select>
        </div>

        <div className="mb-3">
          <label>Description:</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Price ($):</label>
          <input type="number" step="0.01" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Upload Image:</label>
          <input type="file" className="form-control" onChange={handleFileChange} accept="image/*" required />
        </div>

        <button type="submit" className="btn btn-primary" disabled={status.loading}>
          {status.loading ? 'Uploading...' : 'Upload Menu Item'}
        </button>

        {status.message && (
          <div className="alert alert-info mt-3">{status.message}</div>
        )}
      </form>
    </div>
  );
};

export default MenuUploadForm;
