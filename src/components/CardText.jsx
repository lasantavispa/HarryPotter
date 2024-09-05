import React from 'react';
import PropTypes from 'prop-types';
import imgGryffindor from '../images/gryffindor.png';
import imgSlytherin from '../images/slytherin.png';
import imgHufflepuff from '../images/hufflepuff.png';
import imgRavenclaw from '../images/ravenclaw.png';
import '../scss/layout/Card.scss'

function CardText({ filterData }) {
  let houseImage;
  if (filterData.house === 'Gryffindor') {
    houseImage = imgGryffindor;
  } else if (filterData.house === 'Slytherin') {
    houseImage = imgSlytherin;
  } else if (filterData.house === 'Hufflepuff') {
    houseImage = imgHufflepuff;
  } else if (filterData.house === 'Ravenclaw') {
    houseImage = imgRavenclaw;
  }
  return (
    <div className="card__boxText">
      <h2>{filterData.name}</h2>
      <p>{filterData.species}</p>
      <div>{filterData.house}</div>
      {houseImage && (
        <img
          className="imgLogo"
          src={houseImage}
          alt={`logo${filterData.house}`}
        />
      )}
    </div>
  );
}
CardText.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};
export default CardText;
