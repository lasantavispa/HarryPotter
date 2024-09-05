import React from 'react';
import PropTypes from 'prop-types';
import CardText from './CardText';
import Gryffindor from '../images/R2oi.gif';
import Slytherin from '../images/ODND.gif';
import Hufflepuff from '../images/R2oh.gif';
import Ravenclaw from '../images/R2og.gif';
import AltGif from '../images/3SIq.gif';
import '../scss/layout/Card.scss';


function Card({ filterData }) {
  let houseImage;
  if (filterData.house === 'Gryffindor') {
    houseImage = Gryffindor;
  } else if (filterData.house === 'Slytherin') {
    houseImage = Slytherin;
  } else if (filterData.house === 'Hufflepuff') {
    houseImage = Hufflepuff;
  } else if (filterData.house === 'Ravenclaw') {
    houseImage = Ravenclaw;
  } else if (filterData.house === '') {
    houseImage = AltGif;
  }
  return (
    <article>
        <div className="card__boxImg" id={filterData.id}>
          <img className={`card__boxImg--img ${filterData.house}`} src={filterData.image || houseImage} alt="ad" />
        </div>
        <CardText filterData={filterData} />
    </article>     
  );
}
Card.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};
export default Card;
