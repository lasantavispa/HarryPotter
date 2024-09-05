//Components
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import callToApi from '../services/Api';
import ls from '../services/LocalSotrage.js';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer.jsx';
import NotFoundPage from './NotFoundPage.jsx';
//Css
import '../scss/App.scss';


//Function APP
function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState(ls.get('data', {}).name || '');
  const [house, setHouse] = useState(ls.get('data', {}).house || 'Gryffindor');
  const [alive, setAlive] = useState (ls.get('data', {}).alive || true);
  const [dead, setDead] = useState (ls.get('data', {}).dead || true);

  
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);


//Filtra los datos por casa
  const filData = data.filter ((character) => {
    if (house === 'All'){
      return true;
    } else if (house === 'allHouses') {
      return character.house === 'Gryffindor','Slytherin', 'Hufflepuff', 'Ravenclaw'
    } else {
      return character.house === house
    }
  })
  
 //Coje los datos filtrados y los ordena alfabeticamente
  const filterData = [...filData].sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  
  .filter ((character) => character.name.toLowerCase().includes(name.toLowerCase())) 
  
  //Mete la información de los imputs en el LocalStorage
  useEffect (()=> {  
    ls.set('data', {
      name: name,
      house: house,
      alive: alive,
      dead: dead,
    })
  }, [name, house, alive, dead]);

  const handleReset = () => {
    ls.clear()
  };

const handleDead = () => {
  setDead(!dead); 
}
const handleAlive = () => {
  setAlive(!alive);
}
const filteredData = [...filterData].filter((character) => {

  if (alive && dead){
    return filterData
  } else if (dead) {
    return !character.alive
  } else if (alive)
    return character.alive
})

  return (
    <>
      <Header />     
      <Routes>
        <Route path='/' element={ <Main setName={setName} setHouse={setHouse} filterData={filteredData} name={name} house={house} handleReset={handleReset} handleDead={handleDead} handleAlive={handleAlive} dead={dead} alive={alive}/>}/>
        <Route path='/CharacterDetail/:characterName' element={<CharacterDetail data={data} />}/>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      
      <Footer/>
    </>
  );
}
export default App;
