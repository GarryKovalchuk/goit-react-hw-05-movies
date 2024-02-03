import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../components/ServiceAPI/api';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetchByQuery(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className={css.FormDiv}>
        <form className={css.Form} onSubmit={handleSubmit}>
          <input
            className={css.Input}
            type="text"
            value={query}
            onChange={onChange}
          />
          <button className={css.MovButton} type="submit">
            search
          </button>
        </form>
      </div>
      {movies.length > 0 && (
        <ul className={css.MovList}>
          {movies.map(({ id, title, poster }) => (
            <li className={css.MovItem} key={id}>
              <styled
                className={css.MovieLink}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img claccName={css.MovImg} src={poster} alt={title} />
                <div className={css.MovTitle}>
                  <h3>{title}</h3>
                </div>
              </styled>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
