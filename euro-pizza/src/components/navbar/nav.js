import React from 'react';
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
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown h5">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/breakfast">Breakfast</a></li>
            <li><a className="dropdown-item" href="/lunch">Lunch</a></li>
            <li><a className="dropdown-item" href="#">Appetizers and Salads</a></li>
            <li><a className="dropdown-item" href="#">Entrees</a></li>
            <li><a className="dropdown-item" href="#">Pizza and Calzones</a></li>
            <li><a className="dropdown-item" href="#">Beverages</a></li>
          </ul>
        </li>
        <li className="nav-item h5">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )

}

export default navbar;