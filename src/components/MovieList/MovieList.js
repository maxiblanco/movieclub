import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem'

import './MovieList.scss'


const MovieList = ({movies, setCurrent}) => {
  return (
    <div className="">
    <div className="reel scrollbox-shadow"  data-min="20%" id="movie-grid">
    {movies.map(({id, title, poster_path, overview}) => {
      return (
        <MovieListItem key={id} title={title} poster={poster_path} overview={overview} id={id} setCurrent={setCurrent} />
      )
    }
      )}
    </div>
    </div>
  )
}


export default MovieList;