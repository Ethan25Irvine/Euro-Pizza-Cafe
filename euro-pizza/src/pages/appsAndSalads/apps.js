import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';
import './style.css'

function Apps() {

    return (
        <div className="container border border-4 bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>APPETIZERS & SALADS</strong></h1>
            </div>
            <div >
                {/* <img src={Main} className="img-fluid mx-auto d-block my-3" /> */}
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
                    

            {/* <div className="text-center row mx-auto">
                <h5 id="border-width" className="border-bottom border-red mb-3 mx-auto">Grade AA Egg Combos</h5>
            </div>
            <div className="row mx-auto border-bottom border-red" id="border-width">
                <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red">Two Eggs</h5>
                <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-red">6.5</h5>
                <p className="col-10">Served w/ homemade potatoes & choice of toast<br/>
                Love eggs? Ask for a 3rd egg free</p>
            </div> */}

        </div>
    )
}

export default Apps;