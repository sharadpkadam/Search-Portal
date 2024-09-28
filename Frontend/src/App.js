import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BanquetHallList from './components/HallList';
import HotelRoomList from './components/HotelRoomList';
import GymList from './components/GymList';
import RealEstateList from './components/RealEstateList';
import Home from './components/Home';

const App = () => {
  return (

    <Router>
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/banquets" element={<BanquetHallList/>} />
          <Route exact path="/hotels" element={<HotelRoomList/>} />
          <Route exact path="/gyms" element={<GymList/>} />
          <Route exact path="/realestates" element={<RealEstateList/>} />
        </Routes>
      </div>
    </div>
  </Router>

  );
};

export default App;
