import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../scss/layout/List.scss';

import { Link } from 'react-router-dom';


function List({ filterData, name }) {
  if (filterData.length === 0) {
   return <h3 className='error'>There is no character {name} </h3>
  } else {

  return (
    <ul className="list">
      {filterData.map((data) => (
        <li className="card" key={data.id}>
        <Link
          to={`/CharacterDetail/${data.id}`}
          className="link"   
          data={data}                    
        >
        <Card
          filterData={data}
          />
           </Link>
    </li>
      ))}
    </ul>
  );
  }
}



List.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  name: PropTypes.string.isRequired,
};
export default List;
