import React from "react";
import { TiSocialFacebookCircular, TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";



const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-md-2">
              <h5>Company</h5>
              <p>Help / Support & FAQ</p>
              <p>Dealership/Franchise Query</p>
              <p>Corporate Website</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Sitemap</p>
              <p>B2B Buyer Login</p>
            </div>
            <div className="col-md-2">
              <h5>Policy & Term</h5>
              <p>Privacy Policy</p>
              <p>Shipping Policy</p>
              <p>Returns Policy</p>
              <p>Terms & Conditions</p>
              <p>Disclosure Policy</p>
              <p>Cancellation Policy</p>
            </div>
            <div className="col-md-4">
              <h5>Customer Care</h5>
              <p> <FaPhoneAlt /> +919311421554 Helpline Is Available Monday - Saturday 08:00 AM   To 05:00 PM </p>
              <p> <FaWhatsapp /> +919311421553</p>
              <p> <IoMdMail />1 Support@V2Kart.Com</p>
              <p><IoLocationSharp />   V2 Retail Ltd Khasra No - 928, Extended Lal Dora Abadi Village,   Kapashera Border, Tehsil Vasant Vihar, New Delhi-110037 </p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <TiSocialInstagram />
              <TiSocialTwitter />
              <TiSocialFacebookCircular />
              <TiSocialYoutube />
              <br/>
              <span  className="pt-4" style={{fontSize:"23px"}}>SHOP FASTER WITH THE APP</span>
              <div>
                <img style={{height:"47px"}} src="https://s3.amazonaws.com/static.beavercountyradio.com/wp-content/uploads/2020/05/15005541/itunes-app-store-logo.jpg" alt="google store logo"/>
                <img style={{height:"60px"}}  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="google play logo"/>
              </div>
           
            </div>
            <p className="text-center">© Copyright © 2022- V2 Retail Ltd. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
