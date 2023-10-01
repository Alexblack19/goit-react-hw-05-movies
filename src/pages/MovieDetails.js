import { useRef } from 'react';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // useEffect(() => {
  //   //HTTP
  // }, []);
  const { movieId } = useParams();

  return (
    <>      
      <Link to={backLinkLocationRef.current}>Go back</Link>
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
