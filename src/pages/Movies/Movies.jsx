import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../components/ServiceAPI/api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
