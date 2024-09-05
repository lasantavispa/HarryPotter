import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/layout/CharacterDetail.scss';

function TimeTurner() {
  return (
    <Link className="linkM" to="/">
    <button className="linkM__btn">          
    <i className="fa-solid fa-backward"> Time-Turner </i>
      </button>
  </Link>
  )
}

export default TimeTurner