import React from 'react';
import './MovieListItem.scss';

const MovieListItem = (
  { title, poster, id, setCurrent, overview},
) => {
  return (
    <div
      className='box movie-card grow'
      onClick={() => {setCurrent(id)}
      }>
      <img alt={title} src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <p className='image-text'>{title}</p>
    </div>
  );
};

export default MovieListItem;
