import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import Logo from './img/euro_pizza_logo.png';

function navbar (){

    return(
        <nav id="header" className="navbar navbar-expand-md navbar-dark align-top">
  <div className="container py-0">
    {/* <a className="navbar-brand text-danger" href="#">Euro Pizza Caf&‌egrave;</a> */}
    <img src={Logo} className="logo "></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item h5">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} ><a className="nav-link" href="">Home</a></Link>
        </li>
        <li className="nav-item dropdown h5">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/breakfast" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Breakfast</a></Link></li>
            <li><Link to="/lunch" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Lunch</a></Link></li>
            <li><Link to="/apps" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Appetizers and Salads</a></Link></li>
            <li><Link to="/entrees" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Entrees</a></Link></li>
            <li><Link to="/pizza" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Pizza and Calzones</a></Link></li>
            <li><Link to="/beverages" style={{ color: 'inherit', textDecoration: 'inherit'}}><a className="dropdown-item" href="">Beverages</a></Link></li>
          </ul>
        </li>
        <li className="nav-item h5">
          <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}} ><a className="nav-link" href="">Contact Us</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )

}

export default navbar;