import React from 'react';
import './DisplayCard.css';

const DisplayCard = ({ film }) => {
  return (
    <div className="movies">
        
          <div>
            <p> {film.Year}</p>
          </div>

          <div>
            <img className='card-img' src={film.Poster} alt="poster"/>
          </div>

          <div>
            <p> {film.Title}</p>
          </div>
        <span className='card-span'> </span>
     </div>
  )
}

export default DisplayCard;