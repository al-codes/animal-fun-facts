import { animals } from './animals';
import React from 'react'; 
import ReactDOM from 'react-dom';

const background = (
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'   
  />
);

const title = '';
const images = [];

function displayFact(e){
  let facts = animals[e.target.alt].facts;
  let rand = Math.floor(Math.random() * facts.length)
  let fact = animals[e.target.alt].facts[rand];
  document.getElementById('fact').innerHTML = fact;
};

for (const animal in animals) {
  images.push(
    <img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    // Add event listener when click on image
    onClick={displayFact(animals[animal])}
   />);

};

const animalFacts = (
  // Ternary operator in case there is a missing title
  <div>
    <h1>{title === '' ? 'Click for a fun animal fact' : title }</h1>
    {background}
    <div className='animals'>
  {images}
 </div>
 <p id='fact'>
  {displayFact(animals.dolphin)}
  </p>
  </div>
);

ReactDOM.render(
  animalFacts, 
  document.getElementById('root')
  );


