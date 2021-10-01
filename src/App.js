import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurent from './restaurent/Restaurent';
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './aboutUs/AboutUs';
import NotFound from './notFound/NotFound';
import MealDetail from './mealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/restaurent">
           <Restaurent></Restaurent>
          </Route>
          <Route exact path="/meal/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route exact path="/aboutus">
           <AboutUs></AboutUs>
          </Route>
          <Route>
           <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      {/* <Restaurent></Restaurent> */}
    </div>
  );
}

export default App;
