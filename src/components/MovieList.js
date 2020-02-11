import React from 'react';
import MovieListItem from './MovieListItem'

import './MovieList.scss'


const MovieList = (props) => {
  return (
    <div className="flex-container">
    {props.movies.map((movie) => {
      console.log(movie.title)
      return (
        <MovieListItem key={movie.id} title={movie.title} poster={movie.poster_path} id={movie.id} setCurrent={movie.setCurrent} />
      )
    }
      )}
    </div>
  )
}


export default MovieList;