import React, { useEffect, useState } from "react";
import axios from "axios";
import GymDetails from "./GymDetails";

const GymList = () => {
  const [gyms, setgyms] = useState([]);
  const [gym, setgym] = useState({});
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchgyms = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/gyms");
        setgyms(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchgyms();
  }, []);

  const handlegym = (item) => {
    setgym(item);
    setFlag(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (gyms.length === 0) {
    return <div>No gyms available.</div>;
  }

  return (
    <div className="banquet-hall-list">
      <h1 style={{ textAlign: "center", padding: "3rem 0" }}>gyms</h1>
      {flag ? (
        <GymDetails data={gym} close={()=>setFlag(false)} />
      ) : (
        <div className="hall-container">
          {gyms.map((data, index) => (
            <div className="hall-box" key={index}>
              <img src={data.imageUrl} alt={data.name} className="hall-image" />
              <div className="hall-info">
                <h1>{data.name}</h1>
                <ul>
                  <li>Location: {data.location}</li>
                  <li>Amenities: {data.amenities}</li>
                  <li>Plans: ₹{data.Plans}</li>
                </ul>
              </div>
              <button
                className="view-button"
                onClick={() => handlegym(data)}
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

export default GymList;

