import React from 'react';
import TimeTurner from './TimeTurner';
import hat from '../images/hat.gif';
import '../scss/layout/CharacterDetail.scss';
import '../scss/layout/NotFoundPage.scss';


function NotFoundPage() {
  return (
   <main className='NotFoundPage'>
    <TimeTurner/>
    <img  src={hat} alt='Error' className='NotFoundPage__img'/>
    <p>
      Page not found
    </p>
    <p>
      ERROR 404
    </p>
   </main>
  )
}

export default NotFoundPage