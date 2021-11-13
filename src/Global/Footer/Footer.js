import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <h2>CONTACTS</h2>
        <hr />
        <p>We are a small company based in San Francisco which delivers outstanding smart phone collecting experiences.</p>
        <span><i class="fas fa-map-marked-alt"></i> 777 Franklin St, San Francisco</span>
        <br />
        <span><i class="fas fa-phone-alt"></i>  +1 420-240-6000</span>
        <br />
        <span><i class="fas fa-envelope"></i>   mahedihasanshowrov@gmail.com</span>
      </div>
      <div className="foot">
        <h2>About Us</h2>
        <hr />
        <p>We are a small company based in San Francisco which delivers outstanding product collecting experiences.</p>
        <img src="https://dsathemes.com/html/mobicom/files/images/logo-white.png" alt="" />
      </div>
      <div className="foot">
        <h2>Our Social Link</h2>
        <hr />
        <span className="social-icon"><a href="https://www.facebook.com/mehedi.hasanshowrov.14"><i className="fab fa-facebook-square social-icon"></i></a></span>
        <span className="social-icon"><a href="https://www.instagram.com/mehedihasanshowro1/"><i className="fab fa-instagram-square social-icon"></i></a></span>
        <span className="social-icon"><a href="https://twitter.com/"><i className="fab fa-twitter-square social-icon"></i></a></span>
      </div>
    </div >
  );
};

export default Footer;