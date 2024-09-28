import React, { useState } from "react";
import BookingForm from "./BookingForm";
import ThreeSixty from "./ThreeSixty";


const HallDetail = (props) => {
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);

  const handleBooking = () => {
    setBookingFormVisible(true); 
  };

  const closeBookingForm = () => {
    setBookingFormVisible(false); 
  };

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

  return (
    <div className="my-3" style={{ textAlign: "center", width: "100%" }}>
      <button onClick={() => props.close()} style={{margin: "20px",padding: "10px 20px",cursor: "pointer",width: "8rem",justifyContent: "center",background: "#007bff", color: "white",border: "none",borderRadius: "5px",display:"block"}} >Back</button>
      <ThreeSixty imagePath={props.data.imagePath} />
      <h1>{props.data.name}</h1>
      <p style={{ textAlign: "justify" }}>
        Description: {props.data.description}
      </p>
      <p style={{ textAlign: "justify" }}>RealEstateType: {props.data.realEstateType}</p>
      <p style={{ textAlign: "justify" }}>Location: {props.data.location}</p>
      <p style={{ textAlign: "justify" }}>Price: ₹ {props.data.price}</p>
      <p style={{ textAlign: "justify" }}>Phone Number: {props.data.phonenumber}</p>
      <div className="container">
        <button onClick={handleBooking} style={buttonStyle}>Book Now</button>
        {isBookingFormVisible && (
          <div
            className="booking-form-popup"
            style={{ position: 'fixed',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',background: 'white',padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 1000,}}><BookingForm hallId={props.data._id} onClose={closeBookingForm} />
          </div>
        )}
        <button onClick={() => props.close()} style={buttonStyle}>Back</button>
      </div>
    </div>
  );
};

export default HallDetail;
