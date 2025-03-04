import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Display from './Display'; // Import the Display component

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/display" element={<Display />} /> {/* Add the Display route */}
          </Routes>
        </BrowserRouter>
  );
}

export default App;
