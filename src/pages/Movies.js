// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../api/movies-api';
import { MoviesList } from 'components/MoviesList';
import { SearchMovies } from 'components/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === null) {
      return;
    }
    const getMovies = async () => {
      try {
        const data = await getSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams(searchQuery === '' ? {} : { query: searchQuery });
  };

  return (
    <>
      <SearchMovies onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
