import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import all pages and components 
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './componets/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
