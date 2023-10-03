import { useLocation } from 'react-router-dom';
import { ListMovies, MovieLink } from './GlobalStyle';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </li>
        );
      })}
    </ListMovies>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
