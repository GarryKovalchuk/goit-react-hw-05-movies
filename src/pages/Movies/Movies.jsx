import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../components/ServiceAPI/api';
import css from './Movies.module.css';
import { NavLink } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';

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
      {movies.length > 0 && (
        <ul className={css.MovList}>
          {movies.map(({ id, title, poster }) => (
            <li className={css.MovItem} key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <img className={css.MovImg} src={poster} alt={title} />
                <div className={css.MovTitle}>
                  <h3>{title}</h3>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
