import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem'

import './MovieList.scss'


const MovieList = ({movies, setCurrent}) => {
  return (
    <div className="flex-container">
    {movies.map(({id, title, poster_path, overview}) => {
      return (
        <MovieListItem key={id} title={title} poster={poster_path} overview={overview} id={id} setCurrent={setCurrent} />
      )
    }
      )}
    </div>
  )
}


export default MovieList;