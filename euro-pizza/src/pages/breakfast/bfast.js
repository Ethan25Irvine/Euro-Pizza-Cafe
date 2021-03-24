import React from 'react';
import "./style.css"
import Main from './img/MainImg.jpg';
import MenuItem from '../../components/menuCard/card';

import Menu from './db/db';

// function MenuItem(props){
//     console.log(props)
// //     props.breakfast.map(data =>{
// // return (
// //     <div>
// //         <div className="text-center row mx-auto">
// //                 <h3 id="border-width" className="border-bottom border-red mb-3 mx-auto">{data.header}</h3>
// //             </div>
// //             <div className="row mx-auto border-bottom border-red" id="border-width">
// //                 <h5 className="col-10 col-sm-10 col-md-11 col-lg-11 text-red">Two Eggs</h5>
// //                 <h5 className="col-1 col-sm-1 col-md-1 col-lg-1  text-red">6.5</h5>
// //                 <p className="col-10">Served w/ homemade potatoes & choice of toast<br/>
// //                 Love eggs? Ask for a 3rd egg free</p>
// //             </div>
// //     </div>
// // )
// //     })
// }

function Breakfast() {

    return (
        <div className="container border border-4 bg-light pb-3 my-5">
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

            {/* <div className="text-center row mx-auto">
                <h3 id="border-width" className="border-bottom border-red mb-3 mx-auto">Grade AA Egg Combos</h3>
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

export default Breakfast;