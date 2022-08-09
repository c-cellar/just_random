import movies from '../moviesToWatch';
import { randomNumber } from '../helpers';
import { useState } from 'react';
import RandomMovie from './RandomMovie';

const OMDd = 'http://www.omdbapi.com/?apikey=1d847164';

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState([]);

  async function getRandomMovieFromArray() {
    // get a random id from array movies;
    const movieId = movies[randomNumber(movies.length)];

    try {
      const response = await fetch(`${OMDd}&i=${movieId}`);

      if (!response.ok) {
        throw new Error('Could not load movie data');
      }

      const jsonData = await response.json();

      setMovieDetails(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <section className="section--movie">
        <h2>Movie</h2>
        <RandomMovie movieDetails={movieDetails} />
        <button onClick={getRandomMovieFromArray}>get a film</button>
      </section>
    </div>
  );
}
