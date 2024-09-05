import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import '../scss/layout/Form.scss';

function Form({ setName, setHouse, name, house, handleReset, handleDead, handleAlive, dead, alive }) {
  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      console.log('Enter presionado');
    }
  };

  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        Name of the character:
        <input
          onChange={(ev) => {
            setName(ev.target.value);
          }}
          onKeyPress={handleKeyPress}
          value={name}
          type="text"
          id="name"
          name="name"
          className="form__label--input"
          maxLength="35"
        />
      </label>

      <label htmlFor="house" className="form__label">
        Name of the house:
        <select
          onChange={(ev) => {
            setHouse(ev.target.value);
          }}
          onKeyPress={handleKeyPress}
          value={house}
          className="form__label--input opt"
          name="house"
          id="house"
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="allHouses">All characters</option>
        </select>
      </label>

      <div className="alive">
        <label htmlFor="alive" className="alive__label">
          <i className="fa-solid fa-heart-pulse"> </i>
          Alive
          <input 
          className="check" 
          type="checkbox"
          checked={alive}
          onChange={handleAlive}
          
          ></input>
        </label>
        <label htmlFor="alive" className="alive__label">
          <i className="fa-solid fa-skull"> </i>
          Dead
          <input 
          className="check" 
          type="checkbox"
          checked={dead}
          onChange={handleDead}
          ></input>
        </label>
      </div>

      <button className="btn" onClick={handleReset}>
        <i className="fa-solid fa-trash"> Obliviate</i>
      </button>
    </form>
  );
}
Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setHouse: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDead: PropTypes.func.isRequired,
  handleAlive: PropTypes.func.isRequired,
  dead: PropTypes.bool.isRequired,
  alive: PropTypes.bool.isRequired,
};
export default Form;
