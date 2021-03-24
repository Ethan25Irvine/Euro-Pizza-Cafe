import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';


function Lunch() {

    return (
        <div className="container border border-4 bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>LUNCH</strong></h1>
            </div>
            <div >
                {/* <img src={Main} className="img-fluid mx-auto d-block my-3" /> */}
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">Take a break from work or meet up with friends to enjoy a delicious lunch with favorites like our Meatball Parmigiana or a delightful Gyro. All with a perfect view of the world famous Fountain, courtesy of Euro Pizza Café. </p>
                <h5 className="">Ⓥ = Vegetarian </h5>
                <h5 className="">(GF) = Gluten Free</h5>
            </div>
           

            <MenuItem menu={{Menu}}/>

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

export default Lunch;