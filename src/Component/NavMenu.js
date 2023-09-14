/* eslint-disable react/jsx-no-undef */
import { browseroute, route } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import {NavLink }from 'react-router-dom'
import Promotion from './Promotion';
import Catalogue from './Catalogue';





function NavMenu() {
    return (
        <>
            <Container>
                <Navbar bg="success" data-bs-theme="dark"  className="fixed-top justify-content-around">
                    <Navbar.Brand to="/Catalogue"><img
                        alt=""
                        src="logo.png"
                        width="30"
                        height="30"
                    />{' '}<strong>Mercadona</strong></Navbar.Brand>
                    <Nav >
                        <NavLink className="nav-link" to="/" element={<Catalogue />}>Catalogue</NavLink>
                        <NavLink className="nav-link" to="/Promotion" element={<Promotion />} >Promotion</NavLink>                        
                        
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/Admin">Admin</NavLink>
                    </Nav>
               
             </Navbar>
            </Container>

        </>
    );
}

export default NavMenu;