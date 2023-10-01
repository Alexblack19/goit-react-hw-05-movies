import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrendingMovies } from '../api/movies-api';

const Home = () => {
  const location = useLocation();
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
      <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default Home;
