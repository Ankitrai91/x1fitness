import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/x1logoo.png'
import facebook from '../../assets/facebooklogo.png'
const Footer = () => {
  return (
    <div>
  
  <div className="section">
  <div className="card">
      <h4 className="title">OUR PARADISE</h4>
      <div className="info-container">
          <div className="info">
              <h4><i className="fa-solid fa-pepper-hot fa-bounce text-red-700 mt-5"></i><span
                      className="ms-2 font-bold">X1 FITNESS</span></h4>
              <h6>
                  <p>
                      <i className="fa-solid fa-location-dot text-white mt-2"></i> 5/596 <br />
                      <span className="font-bold text-danger">Shanker Nager colony,ranidiha,</span><br />
                       Near Baghicha Academy, Khorabar , Gorakhpur, India, Uttar Pradesh<br />
                      Contact Us  : 07458057071<br />
                      Email       :

                  </p>
              </h6>
          </div>
          <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8741947578583!2d83.42994077543271!3d26.71646577676471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915db77068cbeb%3A0x48f6a974f35b0d43!2sX1%20Fitness!5e0!3m2!1sen!2sin!4v1706303119216!5m2!1sen!2sin"
                  style={{border: '1px solid #000', width: '100%', height:'100%'}} allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
  </div>
  </div>
  <div className="Footer-container">
       <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
      </div>
    </div>
</div>

  );
};

export default Footer