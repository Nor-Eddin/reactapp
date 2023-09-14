import React from 'react';
import Catalogue from './Component/Catalogue';
import Admin from './Component/Admin';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './Component/NavMenu';
import './App.css'
import Promotion from './Component/Promotion';


function App() {
    return (
        
        <Routes>
                <Route exact path="/" element={<Catalogue/>}/>
                <Route path="/Promotion" element={<Promotion/>} />
                <Route path="/Admin" element={<Admin/>} />
                .
        </Routes>

        
    );
}

export default App;
