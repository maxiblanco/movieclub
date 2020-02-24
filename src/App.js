import React, { useState, useEffect } from 'react';
// Components
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/MovieDetail/MovieDetail';
// Styles
import 'main.scss';

const App = () => {
  const [popularMovies, setPopMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [sciFyMovies, setSciFyMovies] = useState([]);
  const [isHidden, toggleHidden] = useState(true);
  const [current, setCurrent] = useState([]);

  const api_url = 'https://api.themoviedb.org/3/discover/movie';
  const api_key = 'bf7a0d7e84fbc649f8d6f2819491a0d6';

  useEffect(() => {
    fetch(
      `${api_url}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(response => response.json())
      .then(data => setPopMovies(data.results));

    fetch(
      `${api_url}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`
    )
      .then(response => response.json())
      .then(data => setHorrorMovies(data.results));

    fetch(
      `${api_url}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80`
    )
      .then(response => response.json())
      .then(data => setSciFyMovies(data.results));
  }, []);

/*   const handleClick = (el) => {

  } */

  return (
    <div className='box stack'>
      <header className='cluster-outer box'>
        <div>
          <h1>My Movie Database</h1>
          <nav className='cluster-inner'>
            <div>
            <input className="search-input" label="search"/>
              <button className="grow">
                <img alt="Search icon" src='https://img.icons8.com/pastel-glyph/64/000000/search--v1.png'/>
              </button>
              <button className="grow">
                <label>Log in</label>
              </button>
              <button className="grow">
                <label>Register</label>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        { isHidden &&
          <MovieDetail
          currentMovie={popularMovies.find(movie => movie.id === current) || horrorMovies.find(movie => movie.id === current) ||
            sciFyMovies.find(movie => movie.id === current)}
          current={current}
          toggleHidden={toggleHidden}
          isHidden={isHidden}
        />
        }

        <MovieList
          className='center cover'
          movies={popularMovies}
          setCurrent={setCurrent}
          toggleHidden={toggleHidden}
          isHidden={isHidden}
        />
        <MovieList
          className='center cover'
          movies={horrorMovies}
          setCurrent={setCurrent}
        />
        <MovieList
          className='center cover'
          movies={sciFyMovies}
          setCurrent={setCurrent}
        />
      </main>
      <footer className='center'>
        <p>The Open Imdb</p>
        <span>
          <a href='https://icons8.com/icon/111487/search'>
            Search icon by Icons8
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
