import React from 'react';
import './style.css';
import Header from './img/header.jpg';
import Header2 from './img/header2.jpg';
import Header3 from './img/header3.jpg';
import Header4 from './img/header4.jpg';




function Home() {

  return (
    <div id = "header" className="container-fluid">

      <div className="row black">
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Header} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Header2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Header3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Header4} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3 text-center">
        <h1 className="text-light">CELEBRATING 20 YEARS OF BUSINESS</h1>
        <h3 className="text-light">&</h3>
        <h1 className="text-light">VOTED BEST PIZZA IN FOUNTAIN HILLS 8 YEARS RUNNING</h1>
      </div>
      <div className="pt-3 row black text-center">
        <p className="text-light h3 border-bottom border-danger">OUR PHILOSOPHY</p>
      </div>
      <div className="row black text-center pt-3">
        <p className="text-light col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">Euro Pizza Café strives to create an oasis from your daily routine by serving great tasting food in a pleasant, relaxing atmosphere. Enjoy a relaxing meal on our patio. We offer the closest dining to the world-famous fountain. All of our entrees are made from scratch and prepared to your order using only the highest quality seafood, meats, pasta and the freshest vegetables. We encourage and welcome your remarks regarding your experience at the Euro Pizza Café. Please feel free to fill out a customer comment card, email us, or call and speak directly with us. We know you have a choice and we appreciate the fact that you have chosen the Euro Pizza Café.</p>
      </div>
    </div>
  )
}

export default Home;