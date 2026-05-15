import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    mobileNumber: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://atp-mern-assignment-week-8-2.onrender.com/api/users', formData);
      navigate('/users');
    } catch (error) {
      console.error("Error adding user:", error);
      alert(error.response?.data?.message || "Failed to add user.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input 
            type="number" 
            name="mobileNumber" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default AddUser;
