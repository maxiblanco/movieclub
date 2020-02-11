import React from 'react';
import './MovieListItem.scss'

const MovieListItem = ({title, poster, id, setCurrent}) => {
  console.log(poster)
  return (
  <div className="movie-item">
    <p>
      {title}
    </p>
    <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster}`} onClick={() => setCurrent(id) }/>
  </div>
)}

export default MovieListItem;