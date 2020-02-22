import React, {useState, useEffect} from 'react';
// Components
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import './App.scss';

const App = () => {
  const [movies, setMovies] = useState([])
  const [current, setCurrent] = useState([])
  const api_key = "bf7a0d7e84fbc649f8d6f2819491a0d6"

useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
  .then((response) => response.json())
  .then(data => setMovies(data.results))
}, [])
console.log(movies)
  return (
    <div className="App">
      <h1>React Study Group Movie - Database</h1>
      <MovieDetail className="center-detail" current={current}/>
      <MovieList className="movie-panel" movies={movies} setCurrent={setCurrent}/>
    </div>
  );
}

export default App;
