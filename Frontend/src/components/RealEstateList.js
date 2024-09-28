import React, { useEffect, useState } from "react";
import axios from "axios";
import RealEstateDetails from "./RealEstateDetails";

const RealEstateList = () => {
  const [realestates, setRealEstates] = useState([]);
  const [property, setproperty] = useState({});
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/realestates");
        setRealEstates(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRealEstates();
  }, []);

  const handleproperty = (item) => {
    setproperty(item);
    setFlag(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (realestates.length === 0) {
    return <div>No realestates available.</div>;
  }

  return (
    <div className="banquet-hall-list">
      <h1 style={{ textAlign: "center", padding: "3rem 0" }}>realestates</h1>
      {flag ? (
        <RealEstateDetails data={property} close={()=>setFlag(false)} />
      ) : (
        <div className="hall-container">
          {realestates.map((data, index) => (
            <div className="hall-box" key={index}>
              <img src={data.imageUrl} alt={data.name} className="hall-image" />
              <div className="hall-info">
                <h1>{data.name}</h1>
                <ul>
                  <li>Location: {data.location}</li>
                  <li>RealEstateType: {data.realEstateType}</li>
                  <li>Price: ₹{data.price}</li>
                </ul>
              </div>
              <button
                className="view-button"
                onClick={() => handleproperty(data)}
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

export default RealEstateList;

