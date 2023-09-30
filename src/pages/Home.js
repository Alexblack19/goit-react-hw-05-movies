import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([
    'movie-trend-1',
    'movie-trend-2',
    'movie-trend-3',
    'movie-trend-4',
    'movie-trend-5',
    'movie-trend-6',
  ]);
  console.log(setMovies);

  // useEffect(() => {
  //   //HTTP
  // }, []);
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie}>
            <Link to={`${movie}`}>{movie}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
