import React from 'react';
import './style.css';
import Breakfast from './img/breakfast.jpg';
import Lunch from './img/lunch.jpeg';
import Pizza from './img/pizza.jpg';
import Dinner from './img/dinner.jpg';
import Sign from './img/sign.jpeg';
// import Merita from './img/merita2.jpg';
import Employee from './img/employee.jpg';



function Home() {

    return (
        <div id="" className="">


            <div className="row black g-0">
                <div className="col">
                    <img className="img-fluid mx-auto d-block" src={Sign}></img>
                </div>
            </div>


            <div className="row bg-dark text-center py-3 g-0">
                <div className="col">
                    <div className="text-light ">

                        <h4 className="">Your Gathering Place for Family, Friends and New Acquaintances</h4>

                    </div>
                </div>
            </div>
            <div className="row black g-0">
                <div className="col">
                    <img className="img-fluid mx-auto d-block" src={Employee}></img>
                </div>
            </div>
            <div className="row bg-danger text-center pt-3 g-0">
                <div className="col">
                    <div className="">
                        <p className="text-light h5"><strong>OUR DISHES ARE DELICIOUS!</strong></p>
                        <p className="text-light">We use Only the Finest Ingredients Our Cocktails are Uniquely Crafted, Wines Hand Selected, Beers Bubbly and Cold.</p>
                    </div>
                </div>
            </div>

            <div className="row g-0">
                <div class="card bg-transparent border-dark p-0 text-white  col-lg-3 col-md-3 col-sm-6 ">
                    <img src={Breakfast} className="card-img" alt="..." />
                    <div className="card-img-overlay text-center pt-5">
                        <h5 className="card-title" style={{ textDecoration: 'underline white' }}>BREAKFAST</h5>
                        <p className="card-text">Start your morning off with a cup of coffee and our high quality breakfast selection.{<br />}</p>
                        <a href="/breakfast" class="btn btn-dark btn-lg ">Breakfast Menu</a>
                    </div>
                </div>
                <div className="card bg-transparent border-dark p-0 text-white  col-lg-3 col-md-3 col-sm-6 ">
                    <img src={Lunch} className="card-img" alt="..." />
                    <div className="card-img-overlay text-center pt-5">
                        <h5 className="card-title" style={{ textDecoration: 'underline white' }}>LUNCH</h5>
                        <p className="card-text">Nothing better than lunch on the patio with the best view in Fountain Hills.{<br />}</p>
                        <a href="/lunch" class="btn btn-dark btn-lg ">Lunch Menu</a>
                    </div>
                </div>
                <div className="card  bg-transparent border-dark p-0 text-white  col-lg-3 col-md-3 col-sm-6">
                    <img src={Dinner} className="card-img" alt="..." />
                    <div className="card-img-overlay text-center pt-5">
                        <h5 className="card-title" style={{ textDecoration: 'underline white' }}>ENTRÉES</h5>
                        <p className="card-text">Enjoy a glass of wine and choose from our wide selection of European inspired dishes.</p>
                        <a href="/entrees" class="btn btn-dark btn-lg ">Entrée Menu</a>
                    </div>
                </div>
                <div className="card bg-transparent border-dark p-0 text-white  col-lg-3 col-md-3 col-sm-6">
                    <img src={Pizza} className="card-img" alt="..." />
                    <div className="card-img-overlay text-center pt-5">
                        <h5 className="card-title" style={{ textDecoration: 'underline white' }}>PIZZA</h5>
                        <p className="card-text">Enjoy our award winning Pizza and Calzones. {<br />} Voted Fountain Hills best 9 years running.{<br />}</p>
                        <a href="/pizza" class="btn btn-lg btn-dark">Pizza Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;