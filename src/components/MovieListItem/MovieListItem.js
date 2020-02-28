import React from 'react';
import './MovieListItem.scss';

const MovieListItem = ({
  title,
  poster,
  id,
  setCurrent,
  overview,
  toggleMovieDetail,
}) => {
  return (
    <div
      className='movie-card scroll-item'
      onClick={() => {
        setCurrent(id);
        toggleMovieDetail(true);
      }}>
      <p className='image-text'>{title}</p>
      {!!poster ? (
        <img alt={title} src={`https://image.tmdb.org/t/p/w200/${poster}`} />
      ) : (
        <img
          alt={title}
          src={`https://placeholder.pics/svg/200x287/DEDEDE/555555/${encodeURI('No poster')}`}
        />
      )}
    </div>
  );
};

export default MovieListItem;
