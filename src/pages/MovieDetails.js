import { useRef, useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getSingleMovie } from '../api/movies-api';
import { MovieInfo } from 'components/MovieInfo';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams(); 

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getSingleMovie(movieId);
        setMovie(data);
      } catch (error) {
        navigate('*');
        console.log(error);
      }
    };
    getMovie();
  }, [movieId, navigate]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {movie && <MovieInfo movie={movie} />}
    </>
  );
};

export default MovieDetails;
