import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Account from './pages/Account.js';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/account" element={ <Account />} />
    </Routes>
  );
}

export default App;
