// import { useEffect } from 'react';

import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // useEffect(() => {
  //   //HTTP
  // }, []);
  const { movieId } = useParams();

  return (
    <>
      <p>MovieDetails: {movieId}</p>
      <Link to="/">Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
