import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About'
import App from './App';

ReactDOM.render((
    
    <Router>
    <Routes>
        <Route exact path='/home' element={<App />} />
        <Route exact path="/about" element={<About />} />
    </Routes>
    </Router>
    ), document.getElementById('root'));