import { useLocation, Link } from 'react-router-dom';
import {HomeList} from './GlobalStyle'

export const MoviesList = ({ movies }) => {  
  const location = useLocation();
  return (
    <HomeList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </HomeList>
  );
};
