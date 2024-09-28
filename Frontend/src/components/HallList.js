import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BanquetHallList.css";
import HallDetails from "./HallDetails";

const BanquetHallList = () => {
  const [halls, setHalls] = useState([]);
  const [banquet, setBanquet] = useState({});
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/banquets");
        setHalls(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHalls();
  }, []);

  const handleBanquet = (item) => {
    setBanquet(item);
    setFlag(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (halls.length === 0) {
    return <div>No banquet halls available.</div>;
  }

  return (
    <div className="banquet-hall-list">
      <h1 style={{ textAlign: "center", padding: "3rem 0" }}>Banquet Halls</h1>
      {flag ? (
        <HallDetails data={banquet} close={()=>setFlag(false)} />
      ) : (
        <div className="hall-container">
          {halls.map((data, index) => (
            <div className="hall-box" key={index}>
              <img src={data.imagePath} alt={data.name} className="hall-image" />
              <div className="hall-info">
                <h1>{data.name}</h1>
                <ul>
                  <li>Location: {data.location}</li>
                  <li>Capacity: {data.capacity}</li>
                  <li>Price: ₹{data.price}</li>
                </ul>
              </div>
              <button
                className="view-button"
                onClick={() => handleBanquet(data)}
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

export default BanquetHallList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Details from '../components/Details';

// const BanquetHallList = () => {
//   const [halls, setHalls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHalls = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/banquets');
//         setHalls(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHalls();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', padding: '3rem 0' }}>Banquet Halls</h1>
//       <Details halls={halls} /> {/* Assuming Details component takes halls as a prop */}
//     </div>
//   );
// };

// export default BanquetHallList;
