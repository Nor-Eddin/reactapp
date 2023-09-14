import React from 'react';
import Home from './Component/Home';
import Catalogue from './Component/Catalogue';
import Login from './Component/Login';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './Component/NavMenu';
import './App.css'


function App() {
    return (
        
        <Routes>
                <Route exact path="" element={<Home/>}/>
                <Route path="/Catalogue" element={<Catalogue/>} />
                <Route path="/Login" element={<Login/>} />
                .
        </Routes>

        
    );
}

export default App;
