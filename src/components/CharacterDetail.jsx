import React, { useState, useEffect } from 'react';
import ls from '../services/LocalSotrage.js';
import PropTypes from 'prop-types';
import NotFoundPage from './NotFoundPage.jsx';
import TimeTurner from './TimeTurner.jsx';
import { useParams } from 'react-router-dom';
import Gryffindor from '../images/R2oi.gif';
import Slytherin from '../images/ODND.gif';
import Hufflepuff from '../images/R2oh.gif';
import Ravenclaw from '../images/R2og.gif';
import iGryffindor from '../images/gryffindor.png';
import iSlytherin from '../images/slytherin.png';
import iHufflepuff from '../images/hufflepuff.png';
import iRavenclaw from '../images/ravenclaw.png';
import AltGif from '../images/3SIq.gif';
import '../scss/layout/CharacterDetail.scss';

function CharacterDetail({ data }) {
  const { characterName } = useParams();
  const foundElem = data.filter((item) => item.id === characterName);
  console.log(foundElem[0]);
  let character = foundElem[0];
  if (character === undefined) {
    character = ls.get('detail', {});
  }

  useEffect(() => {
    ls.set('detail', {
      name: character.name,
      select: character.house,
      alive: character.alive,
      dead: character.dead,
    });
  }, [character]);

  let houseImageP;
  let houseImage;
  if (character.house === 'Gryffindor') {
    houseImage = iGryffindor;
    houseImageP = Gryffindor;
  } else if (character.house === 'Slytherin') {
    houseImage = iSlytherin;
    houseImageP = Slytherin;
  } else if (character.house === 'Hufflepuff') {
    houseImage = iHufflepuff;
    houseImageP = Hufflepuff;
  } else if (character.house === 'Ravenclaw') {
    houseImage = iRavenclaw;
    houseImageP = Ravenclaw;
  } else if (character.house === '') {
    houseImageP = AltGif;
  }

  let alive;
  if (character.alive === true) {
    alive = (
      <i className="fa-solid fa-heart-pulse">
        {' '}
        <span>Alive</span>
      </i>
    );
  } else {
    alive = (
      <i className="fa-solid fa-skull">
        {' '}
        <span>Dead</span>
      </i>
    );
  }

  return foundElem.length !== 0 ? (
    <main className="main">
      <TimeTurner />
      <article className="containerBoard">
        <section className="board">
          <img
            className={`board__photo ${character.house}`}
            src={character.image || houseImageP}
            alt={character.name}
          />
          <section className="board__text">
            <h2 className="board__text--title">{character.name} </h2>
            <img className="board__text--img" src={houseImage || ''} />
            <p>Species: {character.species}</p>
            <p>Patronus: {character.patronus || '-'}</p>
            <p>Ancestry: {character.ancestry || '-'}</p>
            <p>Status: {alive}</p>
            <p>House: {character.house || '-'}</p>
          </section>
        </section>
      </article>
    </main>
  ) : (
    <NotFoundPage />
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
export default CharacterDetail;
