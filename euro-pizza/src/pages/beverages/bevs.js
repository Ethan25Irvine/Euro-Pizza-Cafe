import React from 'react';
import Menu from './db/db';
import MenuItem from '../../components/menuCard/card';
// import './style.css'

function Apps() {

    return (
        <div className="container border border-4 bg-light pb-3 my-5">
            <div className="text-center ">
                <h1 id='border-width' className="mx-auto border-red border-bottom border-4 my-3"><strong>BEVERAGES</strong></h1>
            </div>
            <div >
                {/* <img src={Main} className="img-fluid mx-auto d-block my-3" /> */}
            </div>
            <div className="text-center">
                <p id='border-width' className="mx-auto">Enjoy a refreshing beverage whether it be a healthy drink or something to kick off happy hour. We offer a great selection of craft beers and popular hand picked wines. Beer growlers and wine bottles to go are now available as well!</p>
            </div>
           

            <MenuItem menu={{Menu}}/>
            <div className="text-center">
                <div id="border-width" className="text-center mt-5 row mx-auto border-bottom border-red">
                    <h3  className=" mx-auto"><strong>Wine & Beer</strong></h3>
                </div>
                <p className="border-width mx-auto">Our wine and beer list is constantly changing to provide our customers with new and exciting options. Ask your server for the most up to date items.</p>
            </div>
            
            <div className="text-center mt-5">
                <p className="fst-italic">Prices subject to change</p>
            </div>

        </div>
    )
}

export default Apps;