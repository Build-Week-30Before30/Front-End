import React from 'react';
import "./ComponentCSS/Footer.css";

var phantom = {
    display: 'block',
    padding: '10px',
    height: '15px',
    width: '100%',
  }

const Footer = () => {
    return (
        <div>
            <div style={phantom} /> 
            <p>©2019 30before30</p>
        </div>
    )
}

export default Footer;