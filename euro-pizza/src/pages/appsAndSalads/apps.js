import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';
import Main from './img/salad.jpg';
import './style.css'

function Apps() {

    return (
        <div className="container bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>APPETIZERS & SALADS</strong></h1>
            </div>
            <div >
                <img src={Main} className="img-fluid mx-auto d-block my-3" />
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">Here’s where our menu really starts to shine. Warm up your taste buds with one of our great selection of mouth-watering appetizers and salads. Try our authentic European dishes like Spanokopita, Hummus, or Greek Salad… You can also try an American favorite like Chicken Wings!</p>
                <h5 className="">Ⓥ = Vegetarian </h5>
                <h5 className="">(GF) = Gluten Free</h5>
            </div>
           

            <MenuItem menu={{Menu}}/>
            <div className="text-center">
                <div id="border-width" className="text-center mt-5 row mx-auto border-bottom border-red">
                    <h3  className=" mx-auto"><strong>Dressings</strong></h3>
                </div>
                <p className="border-width mx-auto">Ranch, Blue Cheese, Italian, Balsamic Vinaigerette, Ceasar, Honey Mustard, 1000 Island, Zesty Orange Vinaigerette, Olive Oil & Vinegar</p>
            </div>
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Apps;