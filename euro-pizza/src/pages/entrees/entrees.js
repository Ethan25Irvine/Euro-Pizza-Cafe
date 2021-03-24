import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';


function Lunch() {

    return (
        <div className="container border border-4 bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>ENTRÈES</strong></h1>
            </div>
            <div >
                {/* <img src={Main} className="img-fluid mx-auto d-block my-3" /> */}
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">From our Chipotle Chicken Pasta to our Spaghetti with Homemade Marinara Sauce, our Dinner Entrees burst with flavor, thanks to our fresh ingredients and authentic recipes from across Europe. Enjoy your meal with your family in our cozy dining room, or take in the fresh air outside on our terrace and watch the sun go down by the famous fountain. Either way, it is our pleasure to serve you and to make you feel at home.</p>
                <h5 className="">Ⓥ = Vegetarian </h5>
                <h5 className="">(GF) = Gluten Free</h5>
                <h5 className="">MP = Market Price</h5>

            </div>
           

            <MenuItem menu={{Menu}}/>
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Lunch;