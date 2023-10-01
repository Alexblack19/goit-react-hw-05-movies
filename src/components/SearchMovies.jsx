import { useState } from 'react';

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
      <input
        onChange={handleChange}
        placeholder={'Enter a movie'}
        value={query}
        name="query"
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
};
