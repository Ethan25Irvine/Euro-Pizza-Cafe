import React from 'react';
import "./style.css"
import Main from './img/MainImg.jpg';
import MenuItem from '../../components/menuCard/card';

import Menu from './db/db';


function Breakfast() {

    return (
        <div className="container bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>BREAKFAST</strong></h1>
            </div>
            <div >
                <img src={Main} className="img-fluid mx-auto d-block my-3" />
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">Start your day off right with a selection from our fresh breakfast menu. With favorites like our French Toast with Strawberries and Cream to health-conscious choices like our delicious Veggie Omelet, you will fill your tanks up right in preparation for another day. You can enjoy your breakfast in the fresh air on our lovely terrace, and top it off with a mimosa or a cup of café latte… ahhh, it’s just another morning at Euro Pizza Café.</p>
            </div>

            <MenuItem menu={{Menu}}/>
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Breakfast;