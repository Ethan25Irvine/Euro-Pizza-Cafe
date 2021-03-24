import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';


import Navbar from './components/navbar/nav';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Breakfast from './pages/breakfast/bfast';
import Lunch from './pages/lunch/lunch';

import './style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/breakfast" component={Breakfast}/>
      <Route exact path="/lunch" component={Lunch}/>
      <Footer />
    </Router>


  );
}

export default App;
