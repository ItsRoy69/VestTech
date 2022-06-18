import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/js/bootstrap.min.js";


const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
