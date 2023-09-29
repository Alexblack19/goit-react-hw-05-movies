// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // useEffect(() => {
  //   //HTTP
  // }, []);
  return (
    <div>
      {[
        'movie-trend-1',
        'movie-trend-2',
        'movie-trend-3',
        'movie-trend-4',
        'movie-trend-5',
        'movie-trend-6',
      ].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
