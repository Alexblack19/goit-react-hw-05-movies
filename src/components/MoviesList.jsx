import { useLocation } from 'react-router-dom';
import {ListMovies, MovieLink} from './GlobalStyle'

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
