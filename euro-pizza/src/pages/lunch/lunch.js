import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';
import Main from './img/lunch.jpg';


function Lunch() {

    return (
        <div className="container bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>LUNCH</strong></h1>
            </div>
            <div >
                <img src={Main} className="img-fluid mx-auto d-block my-3" />
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">Take a break from work or meet up with friends to enjoy a delicious lunch with favorites like our Meatball Parmigiana or a delightful Gyro. All with a perfect view of the world famous Fountain, courtesy of Euro Pizza Café. </p>
                <h5 className="">Ⓥ = Vegetarian </h5>
                <h5 className="">(GF) = Gluten Free</h5>
            </div>
           

            <MenuItem menu={{Menu}}/>
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Lunch;