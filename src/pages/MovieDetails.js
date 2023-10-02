import { useRef, useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../api/movies-api';
import { MovieInfo } from '../components/MovieInfo';
import { LinkBtn } from '../components/GlobalStyle';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getMovieDetails(movieId);
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
      <LinkBtn to={backLinkLocationRef.current}>
        <AiOutlineArrowLeft />
        Go back
      </LinkBtn>
      {movie && <MovieInfo movie={movie} />}
    </>
  );
};

export default MovieDetails;
