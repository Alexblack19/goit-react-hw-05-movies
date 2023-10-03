import { useState } from 'react';
import { InputSearch, SearchBtn } from '../components/GlobalStyle';
import PropTypes from 'prop-types';

export const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim());
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        onChange={handleChange}
        placeholder={'Enter a movie'}
        value={query}
        name="query"
        type="text"
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
