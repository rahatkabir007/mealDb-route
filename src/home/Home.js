import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="body">
            <div>
                <Navbar bg="dark"  expand="lg" id="nav" className="navbar">
                    <Container fluid>
                        <Navbar.Brand id="nav" href="#">Meal Db</Navbar.Brand>
                        <Navbar.Toggle style={{color: "white"}} />
                        <Navbar.Collapse >
                            <Nav id="nav "
                                className="me-auto mb-4 my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}

                            >
                                <Nav.Link href="#action1">
                                    <Link to='/home' style={{ textDecoration: "none" }}>Home</Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to='/aboutus' style={{ textDecoration: "none" }}>About Us</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="heading">
                <h1>Welcome To MealDB</h1>
                <Link to='/restaurent' style={{ textDecoration: "none" }}> <Button variant="dark">Click Here To See Menu</Button></Link>
               
            </div>
        </div>
    );
};

export default Home;