import React from 'react';
import daliLogo from '../images/photodali.png';
import '../scss/layout/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <a 
      href='https://www.linkedin.com/in/angela-avila-lasanta/'
      target='_blank'
      rel='noreferrer'
      className="footer__link"
      >
        <img className="daliLogo" src={daliLogo} alt="Logo" />
        <h3>LASANTAVISPA</h3>
      </a>
    </footer>
  );
}

export default Footer;
