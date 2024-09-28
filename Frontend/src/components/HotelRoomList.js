import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomDetails from "./RoomDetails";

const HotelRoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/hotels");
        setRooms(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleRoom = (item) => {
    setRoom(item);
    setFlag(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (rooms.length === 0) {
    return <div>No rooms available.</div>;
  }

  return (
    <div className="banquet-hall-list">
      <h1 style={{ textAlign: "center", padding: "3rem 0" }}>rooms</h1>
      {flag ? (
        <RoomDetails data={room} close={()=>setFlag(false)} />
      ) : (
        <div className="hall-container">
          {rooms.map((data, index) => (
            <div className="hall-box" key={index}>
              <img src={data.imageUrl} alt={data.name} className="hall-image" />
              <div className="hall-info">
                <h1>{data.name}</h1>
                <ul>
                  <li>Location: {data.location}</li>
                  <li>Roomtype: {data.roomType}</li>
                  <li>Price: ₹{data.price}</li>
                </ul>
              </div>
              <button
                className="view-button"
                onClick={() => handleRoom(data)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelRoomList;

