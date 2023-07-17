import React from 'react';
import './Movies.css'

function MoviesComponent(props) {
    console.log(props);
  return (
    <div className="container" >
      {props.movieitems.map((item) => (
        <div className="card" key={item.id}>
          <img className="card-image" src={item.Poster} alt="Card" />
          
        </div>
      ))}
    </div>
  );
}

export default MoviesComponent;