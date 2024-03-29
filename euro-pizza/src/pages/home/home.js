import React from 'react';
import './style.css';
// import Header from './img/header.jpg';
// import Header2 from './img/header2.jpg';
// import Header3 from './img/header3.jpg';
// import Header4 from './img/header4.jpg';
// import Shirts from './img/shirts.jpg';
import Collage from './img/image2.jpg';
import Merita from './img/merita2.jpg';
import Employee from './img/employee.jpg';



function Home() {

  return (
    <div id="" className="">
      <div className="row tan text-center g-0">
        <div className="col">
          <div className="py-3 text-dark ">
            <h4>With Gratitude We Welcome You to</h4>
            <h4></h4>
            <h1 className="text-danger display-1"><strong>EURO PIZZA CAFÈ</strong> </h1>

            <h4 className="text-dark">Your Gathering Place for {<br />}
              Family, Friends and
            New Acquaintances</h4>

            <p className="text-dark h5"><strong>OUR DISHES ARE DELICIOUS!</strong></p>
          <p className="text-dark ">We use Only the Finest Ingredients Our Cocktails are Uniquely Crafted, Wines Hand Selected, Beers Bubbly and Cold. {<br />}Relax and Take Your Time. Inside or on the newly renovated Fountain side patio Where your furry friends are also welcome.</p>
          <p className="text-dark h4 ">Proudly serving Fountain Hills for more than {<br />}<strong>Twenty Years!</strong></p>
          </div>
        </div>
      </div>
      {/* <div className="row tan text-center no-gutters">
        <div className="col">
          <p className="text-dark h5"><strong>OUR DISHES ARE DELICIOUS!</strong></p>
          <p className="text-dark col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12  col-12">We use Only the Finest Ingredients Our Cocktails are Uniquely Crafted, Wines Hand Selected, Beers Bubbly and Cold. {<br />}Relax and Take Your Time. Inside or on the newly renovated Fountain side patio Where your furry friends are also welcome.</p>
          <p className="text-dark col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12  col-12 h4 ">Proudly serving Fountain Hills for more than {<br />}<strong>Twenty Years!</strong></p>
        </div>
      </div> */}
      {/* 9 */}
      {/* <div className="row tan text-center">
        <div className="py-3 text-dark ">
          <h4>With Gratitude We Welcome You to</h4>
          <h4></h4>
          <h1 className="text-danger display-1"><strong>Euro Pizza Café</strong> </h1>

          <h4 className="text-dark">Your Gathering Place for {<br />}
            Family, Friends and
            New Acquaintances</h4>
        </div>
      </div> */}

      <div className="row black g-0">
        <div className="col">
          <img className="img-fluid mx-auto d-block" src={Collage}></img>
          <img className="img-fluid mx-auto d-block" src={Employee}></img>
        </div>
      </div>
      {/* <div className="row black no-gutters">
        <div className="col">
          <img className="img-fluid mx-auto d-block" src={Employee}></img>
        </div>
      </div> */}


      <div className="container py-3 text-center">
        <div className="row">
          <div className="col">
            <p className="h3 text-center border-bottom text-light border-light">MEET MERITA</p>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col">
            <div className="">
              <img className="img-fluid pt-5 mx-auto d-block" src={Merita}></img>
            </div>
            <div className=" py-3 text-dark bd-black">
              <p className="">Merita is a modern woman who embraces the time tested European ways of life. Except for her escape from the communist regime. A civil engineer by trade, she found herself designing and building a restaurant for a client in Fountain Hills.</p>
              <p className="">With a new family on the way, and no one to take over; Merita stepped in and created Euro Pizza Cafe, her labor of love. {<br />}Merita takes great pride in her community and supports charitable giving.</p>

              <p className="">She also invests in our young community, inbuing them with independence, sense of service, strong work, and business ethics. {<br />}“I am so grateful and proud of all my employees. They all contributed in making Euro a great success story".</p>

              <p className="">She raised four great children:{<br />}
                “I couldn’t have done it without the community. As they say, it takes a village.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;