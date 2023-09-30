// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesSearch, setMoviesSearch] = useState([
    'movie-search-1',
    'movie-search-2',
    'movie-search-3',
    'movie-search-4',
    'movie-search-5',
    'movie-search-6',
  ]);
  console.log(setMoviesSearch);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {
  //   //HTTP
  // }, []);

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = moviesSearch.filter(movie => movie.includes(movieId));

  return (
    <>
      <div>Movies</div>
      <form>
        <input type="text" value={movieId} onChange={updateQueryString} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
