import React from 'react';
import '../scss/layout/Header.scss';
import imgHeader from '../images/header.jpg';

function Header() {
  return (
  <header className='header'>
    <img src={imgHeader} alt="HarryPotter" className='header__img' />
  </header>
  );
}

export default Header;
