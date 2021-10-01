import React, { useEffect, useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css'

import SearchField from '../searchArea/SearchField';

const Meals = () => {

    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState([]);
    const [displayMeals, setDisplayMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setDisplayMeals(data.meals)
            })
      
    }, [search])

    const handleSearch = event => {
        const searchText = event.target.value;
        setSearch(searchText);
        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayMeals(matchedMeals);

    }

    return (
        <div>
            <SearchField></SearchField>

            <Container className="mt-3">
                <Form>
                    <input onChange={handleSearch} class="form-control mb-4 w-50 mx-auto" type="search" placeholder="Search" aria-label="Search" />
                </Form>
                <Row xs={2} md={2} lg={4} className="g-4">
                        {
                            displayMeals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                        }
                </Row>
               
            </Container>
               

            </div>

        
    );
};

export default Meals;