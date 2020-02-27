import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';

import './MovieList.scss';

const MovieList = ({ movies, setCurrent, toggleMovieDetail }) => {
  return (
    <div className='box variant'>
    <div className="">
    <div
      className='reel scroll'
      data-min='20%'
      id='movie-grid'>
      {movies.map(({ id, title, poster_path, overview }) => {
        return (
          <MovieListItem
            className='scroll-item'
            key={id}
            title={title}
            poster={poster_path}
            overview={overview}
            id={id}
            setCurrent={setCurrent}
            toggleMovieDetail={toggleMovieDetail}
          />
        );
      })}
    </div>
    </div>
    </div>
  );
};

export default MovieList;
