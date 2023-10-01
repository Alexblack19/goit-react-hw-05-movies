import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import poster from 'images/no_movie_pic.png';

export const MovieInfo = ({ movie }) => {
  return (
    <>
      <div>
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : poster
          }
          alt=""
        />
        <div>
          <div>
            <h1>
              {movie.title} {`(${movie.release_date.slice(0, 4)})`}
            </h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            <p>{movie.genres.map(genre => genre.name).join()}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
