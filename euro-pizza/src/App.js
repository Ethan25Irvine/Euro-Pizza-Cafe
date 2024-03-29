import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React from 'react';


import Navbar from './components/navbar/nav';
import Footer from './components/footer/footer';
import Home from './pages/home/home2';
import Breakfast from './pages/breakfast/bfast';
import Lunch from './pages/lunch/lunch';
import Appetizers from './pages/appsAndSalads/apps';
import Entrees from './pages/entrees/entrees';
import Pizza from './pages/pizzaAndCalzones/pizza';
import Beverages from './pages/beverages/bevs';
import Contact from './pages/contact/contact';

import './style.css';

function App() {
  return (
    <Router basename='/'>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/breakfast" component={Breakfast}/>
      <Route exact path="/lunch" component={Lunch}/>
      <Route exact path="/apps" component={Appetizers}/>
      <Route exact path="/entrees" component={Entrees}/>
      <Route exact path="/pizza" component={Pizza}/>
      <Route exact path="/beverages" component={Beverages}/>
      <Route exact path="/contact" component={Contact}/>
      <Footer />
    </Router>


  );
}

export default App;
