import React from 'react';
import "./style.css";



function Contact() {
    return (
        <div className="container bg-light pb-3 my-5">
            <div className="row text-center mt-5">
                <h1>Thank you for choosing Euro Pizza Café!</h1>
            </div>
            <div className="row text-center mt-3">
                <p>We are open 7 days a week<br /> 7:30 AM to 9:00 PM <br /> Serving Breakfast, Lunch & Dinner</p><br />
            </div>
            <div className="row text-center">
                <p>Call us: <strong>480-836-0207</strong> or Email Us: <strong>europizzacafe@cox.com</strong><br /> You can make reservations for parties of 6 or more<br />Order take out or Delivery</p>
                <h4 className="text-danger">Follow us on Social Media <br /> and tag us on your posts!</h4>
                <div className="row text-center">
                    <h1 className="icon offset-lg-4 offset-md-4 offset-sm-4 offset-2 col-lg-1 col-md-1 col-sm-1 col-2" ><a className="text-dark" href="https://www.facebook.com/europizzacafe?fref=ts" target="_blank"><i class="fab fa-facebook-f"></i></a></h1>
                    <h1 className="icon col-lg-1 col-md-1 col-sm-1 col-2"><a className="text-dark" href="https://www.instagram.com/europizzacafe/" target="_blank"><i class="fab fa-instagram"></i></a></h1>
                    <h1 className="icon col-lg-1 col-md-1 col-sm-1 col-2"><a className="text-dark" href="https://www.yelp.com/biz/euro-pizza-cafe-fountain-hills" target="_blank"><i class="fab fa-yelp"></i></a></h1>
                    <h1 className="icon col-lg-1 col-md-1 col-sm-1 col-2"><a className="text-dark" href="https://www.tripadvisor.com/Restaurant_Review-g31227-d510942-Reviews-Euro_Pizza_Cafe-Fountain_Hills_Arizona.html" target="_blank"><i class="fab fa-tripadvisor"></i></a></h1>

                </div>
            </div>
            <div className="row justify-content-center">
                <iframe className="border-top border-danger col-lg-10 " allowtransparency="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5886.644102894753!2d-111.71532807184963!3d33.602093884273444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x63002c8b5ad215d6!2sEuro+Pizza+Cafe!5e0!3m2!1sen!2sus!4v1439920060626"
                     height="550" ></iframe>
            </div>

        </div>

    )


}


export default Contact;