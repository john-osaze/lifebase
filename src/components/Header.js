import React, { useContext } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Nav_Icon from '../Assets/plant.svg';
import '../Css/Navigation.css'
import {NavLink} from 'react-router-dom';
import { StateContext } from '../App';


function Header() {
    const {isLoggedIn} = useContext(StateContext);
    return (
        <div className="header">
            <div className="navigation">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href={isLoggedIn?'/home':"/"}>
                            <img className="nav_icon pr-2" src={Nav_Icon} alt="" />
                            Medic</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                {isLoggedIn ? <>
                                    <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/add">Add</NavLink></Nav.Link>
                                </> : <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">SignUp</Nav.Link>
                                </>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;