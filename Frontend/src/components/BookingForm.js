import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'; 

const BookingForm = ({ hallId, onClose }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState(''); 
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { hallId, name, mobile, email, date };
    
    try {
      const response = await fetch('http://localhost:8000/api/book', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData), 
      });

      if (!response.ok) {
        throw new Error('Booking failed!');
      }

      alert('Booking successful !');
      onClose(); 
      navigate('/'); 
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Booking Form</h2>
      <div className="form-group">
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Your Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={today} required />
      </div>
      <button type="submit" className="primary-button">Book Now</button>
      <button type="button" className="primary-button" onClick={onClose}>Close</button>
    </form>
  );
};

export default BookingForm;
