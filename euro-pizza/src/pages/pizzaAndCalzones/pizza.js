import React from 'react';
// import "./style.css"
import Main from './img/pizza.jpg';
import MenuItem from '../../components/menuCard/card';
import PizzaItem from "../../components/menuCard/pizzaCard";

import Menu from './db/calzone';
import PizzaMenu from './db/pizzadb';

function Pizza() {

    return (
        <div className="container bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>PIZZA & CALZONES</strong></h1>
            </div>
            <div >
                <img src={Main} className="img-fluid mx-auto d-block my-3" />
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">True to our name, our Pizzas and Calzones are second to none. Whether you select one of our handmade masterpieces or make your own from our selection of fresh toppings, you will not be disappointed. Come in today and try for yourself.</p>
                <h5 className="">Ⓥ = Vegetarian </h5>
            </div>
<PizzaItem menu={{PizzaMenu}}/>
            {/* <div>
                <div id="border-width" className="text-center mt-5 row mx-auto border-bottom border-red">
                    <h3 className=" mx-auto"><strong>Pizza</strong></h3><br /><h6>Example</h6>
                </div>
                <div className="row mx-auto border-bottom border-dark mt-3" id="border-width">
                    <h5 className="col-8 col-sm-8 col-md-10 col-lg-10 text-red"></h5>
                    <h5 className="col-2 col-sm-2 col-md-1 col-lg-1  text-red text-end">"14</h5>
                    <h5 className="col-2 col-sm-2 col-md-1 col-lg-1  text-red text-end">"16</h5>
                    {data2.description === "" ? (null) : (split[0] === "" ? (<p className="col-10"><strong>{split[1]}</strong></p>) : (<p className="col-10">{split[0]}<br /><strong>{split[1]}</strong></p>))}

                </div>

            </div> */}

            <MenuItem menu={{ Menu }} />
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Pizza;