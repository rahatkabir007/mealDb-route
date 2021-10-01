import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import './MealDetail.css'

const MealDetail = () => {
    const { mealId } = useParams();
    const [details, setDetails] = useState([]);
    const history = useHistory();

    const handleButton = () => {
        history.push('/restaurent')
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [mealId])
    return (
        <div>
            <div>
                <Navbar bg="dark" expand="lg" id="nav" className="navbar">
                    <Container fluid>
                        <Navbar.Brand id="nav" href="#">Meal Db</Navbar.Brand>
                        <Navbar.Toggle style={{ color: "white" }} />
                        <Navbar.Collapse >
                            <Nav  id="nav"
                                className="me-auto mb-4 my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}

                            >
                                <Nav.Link href="#action1">
                                    <Link to='/home' style={{ textDecoration: "none" }}>Home</Link>
                                </Nav.Link>
                                <Nav.Link href="#action1">
                                    <Link to='/restaurent' style={{ textDecoration: "none" }}>Menu</Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to='/aboutus' style={{ textDecoration: "none" }}>About Us</Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to='/details' style={{ textDecoration: "none" }}>Details</Link>
                                </Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Card className="mb-3 mt-3 w-25 mx-auto meal-detail" >
                    <Card.Img variant="top" src={details.strMealThumb} className='p-4 img'/>
                    <Card.Body>
                        <Card.Title>Name: {details.strMeal}</Card.Title>
                        <Card.Text>
                            Category: {details.strCategory}
                        </Card.Text>
                        <Card.Text>
                            Instructions: {details.strInstructions}
                        </Card.Text>
                        <Card.Text>
                            <Button variant="dark"><a href={details.strYoutube} style={{ textDecoration: "none" ,color: "white"}}>Watch Video</a></Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="text-center m-5">
                <Button variant="dark" onClick={handleButton}>Go Back To Menu</Button>
            </div>
        </div>
    );
};

export default MealDetail;