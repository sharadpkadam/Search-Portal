import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const buttonStyle = {
    margin: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    width: "8rem",
    justifyContent: "center",
    background: "#007bff", 
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to LetzStepIn Pune</h1>
            <p>Select a service from the menu to get started.</p>

            <div className="card-container">
                <div className="card">
                    <h2>Banquet Hall</h2>
                    <p>Book your perfect event space.</p>
                    <Link to= "/banquets" className="book-button"><button className="btn-primary" style={buttonStyle}>view</button></Link>
                </div>
                <div className="card">
                    <h2>Hotel Room</h2>
                    <p>Find your ideal accommodation.</p>
                    <Link to= "/hotels" className="book-button"><button className="btn-primary" style={buttonStyle}>view</button></Link>
                </div>
                <div className="card">
                    <h2>Fitness Gym</h2>
                    <p>Join us for a healthier lifestyle.</p>
                    <Link to= "/gyms" className="book-button"><button className="btn-primary" style={buttonStyle}>view</button></Link>
                </div>
                <div className="card">
                    <h2>Real Estate</h2>
                    <p>Explore properties at premium rates.</p>
                    <Link to= "/realestates" className="book-button"><button className="btn-primary" style={buttonStyle}>view</button></Link>
                </div>
            </div>

            <section id='About' className="about-section">
                <h2>About Us</h2>
                <p>
                LetzStepIn advantage unfolds with a plethora of benefits, discounts, and rewards accompanying every online and offline purchase. Our vision is grand – to evolve into the world's most trusted, valued, secure, and advanced e-commerce 360° virtual marketplace. We aspire to be accessible hassle-free to individuals globally, anywhere, anytime. Our platform is designed for those tech-savvy and internet-enabled individuals seeking ease and efficiency.
                </p>
            </section>
            
            <div className='footer'>
            <section id='Services' className="services-section">
                <h2>Our Services</h2>
                <ul>
                    <li>Event Planning and Banquet Services</li>
                    <li>Luxury and Budget Hotel Accommodations</li>
                    <li>Personal Training and Fitness Classes</li>
                    <li>Real Estate Consultation and Listings</li>
                </ul>
            </section>

            <section id='Contact' className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    For inquiries, please reach out to us at:
                </p>
                <p>Email: info@letzstepin.com</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: 123 Pune Street, Pune, India</p>
            </section>
            </div>
        </div>
    );
};

export default Home;
