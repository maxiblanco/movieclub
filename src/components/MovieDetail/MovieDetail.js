import React, { useState, useEffect } from 'react';
import YouTube from  'react-youtube';
import './MovieDetail.scss';

const MovieDetail = ({
  currentMovie: { title, poster_path, overview } = '',
  current,
  toggleMovieDetail
}) => {
  const api_url_video = 'https://api.themoviedb.org/3/movie';
  const api_key = 'bf7a0d7e84fbc649f8d6f2819491a0d6';

  const [trailerKey, setTrailerKey] = useState([]);
  
  const opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: 'http://localhost:3000'
    }
  }

  const handleVideoReady = (e) => {
    e.target.pauseVideo();
  }

  useEffect(() => {
    fetch(
      `${api_url_video}/${current}/videos?api_key=${api_key}`
    )
      .then(response => response.json())
      .then(data => setTrailerKey(data.results));
  }, [current]);
  console.log(trailerKey)
  return (
    <>
      {title && (
        <div className='movie-detail'>
          <div className='center imposter'>
            <div className='box container'>
            <div className='switcher'>
            <p className='title-text'>{title}</p>
            <img
              className='poster'
              alt={title}
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            />
            <p className='overview-text'>{overview}</p>
            <img
              alt='close icon'
              className='close-icon'
              onClick={() => toggleMovieDetail(false)}
              src='https://img.icons8.com/small/50/000000/close-window.png' 
              />
              {
                trailerKey &&
                <YouTube
                videoId={trailerKey || trailerKey[0].key}
                opts={opts}
                onReady={handleVideoReady}/>
              }
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
