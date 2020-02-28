import React, { useState, useEffect } from 'react';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
// Components
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
// Datasets
import GENRES_IDS from './lib/genres.js';
// Styles
import 'main.scss';

const App = () => {
  // Fetch list of movies and save state
  const [popularMovies, setPopMovies] = useState([]);
  const [movieLists, setMovieLists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Manage selected movie and detail
  const [isMovieDetailOpen, toggleMovieDetail] = useState(false);
  const [current, setCurrent] = useState([]);

  const api_url = 'https://api.themoviedb.org/3/discover/movie';
  const api_url_search = 'https://api.themoviedb.org/3/search/movie';
  const api_key = 'bf7a0d7e84fbc649f8d6f2819491a0d6';

  const fetchMoviesFromAPI = async querySet => {
    const allGenreMovieLists = await Promise.all(
      querySet.map(async query => {
        const response = await fetch(
          `${api_url}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${query.id}`
        );
        const data = await response.json();
        return data.results;
      })
    );
    setMovieLists(allGenreMovieLists);
  };

  useEffect(() => {
    const movieListsDatatoRender = fetchMoviesFromAPI(GENRES_IDS);
    console.log(movieListsDatatoRender);

    fetch(
      `${api_url}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
    )
      .then(response => response.json())
      .then(data => setPopMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `${api_url_search}?api_key=${api_key}&query=${searchQuery}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`
    )
      .then(response => response.json())
      .then(data => setSearchResults(data.results));
  }, [searchQuery]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    const movieQuery = encodeURI(e.target.firstChild.value);
    setSearchQuery(movieQuery);
  };
  /*   const handleClick = (el) => {

  } */

  return (
    <div className='box stack'>
      <header className='cluster-outer box'>
        <div>
          <h1>My Movie Database</h1>
          <nav className='cluster-inner'>
            <div className='cluster'>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type='text'
                  placeholder=''
                  className='search-input'
                  name='searchBox'
                  id='searchBox'
                />
                <button>
                  <label>
                    <img
                      alt='Search icon'
                      src='https://img.icons8.com/ios-filled/52/000000/search.png'
                    />
                  </label>
                </button>
              </form>
              {/*
            <button className='grow'>
            <p>Log in</p>
          </button>
          <button className='grow'>
            <p>Register</p>
          </button> */}
            </div>
          </nav>
        </div>
      </header>
      <main className='stack'>
        {isMovieDetailOpen && (
          <MovieDetail
            currentMovie={
              popularMovies.find(movie => movie.id === current) ||
              searchResults.find(movie => movie.id === current)
            }
            current={current}
            toggleMovieDetail={toggleMovieDetail}
            isMovieDetailOpen={isMovieDetailOpen}
          />
        )}
        {searchResults && (
          <MovieList
            className='center cover'
            movies={searchResults}
            setCurrent={setCurrent}
            toggleMovieDetail={toggleMovieDetail}
            isMovieDetailOpen={isMovieDetailOpen}
          />
        )}
        <MovieList
          className='center cover'
          movies={popularMovies}
          setCurrent={setCurrent}
          toggleMovieDetail={toggleMovieDetail}
          isMovieDetailOpen={isMovieDetailOpen}
        />
        {movieLists &&
          movieLists.map((movieList, index) => (
            <MovieList
            key={`Genre#${index}`}
              className='center cover'
              movies={movieList}
              setCurrent={setCurrent}
              toggleMovieDetail={toggleMovieDetail}
              isMovieDetailOpen={isMovieDetailOpen}
            />
          ))}
      </main>
      <footer className='center'>
        <p>The Open Imdb API</p>
        <span>
          <a href='https://icons8.com/icon/111487/search'>Icons by Icons8</a>
        </span>
      </footer>
    </div>
  );
};

export default App;
