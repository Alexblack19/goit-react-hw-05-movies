import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../api/movies-api';
import { MoviesList } from '../components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);
  
  return (
    <div>
      <h1>Trending today:</h1>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
