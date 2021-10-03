import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb, strCategory } = props.meal || {};

    return (
        <div >
            <Col>
                <Card className="mb-3 h-100">
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>Name: {strMeal}</Card.Title>
                        <Card.Text>
                            Category: {strCategory}
                        </Card.Text>
                        <Card.Text>
                            <Link to={`/meal/${idMeal}`} style={{ textDecoration: "none" }} >Click Here To See Details</Link>
                        </Card.Text>
                        <Card.Text>
                            <Link to={`/meal/${idMeal}`}><Button variant="dark">Click Here To See Details</Button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;