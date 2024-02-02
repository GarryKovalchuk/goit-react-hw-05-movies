import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../components/ServiceAPI/api';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div className={css.HomeContainer}>
      <h1 className={css.HomeTitle}>Tranding today</h1>
      {movies.length > 0 && (
        <ul className={css.MovieList}>
          {movies.map(({ id, title, poster }) => (
            <li className={css.MovieItem} key={id}>
              <styled
                className={css.MovieLink}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img className={css.HomeImg} src={poster} alt={title} />
                <div className={css.MovieTitle}>
                  <h3>{title}</h3>
                </div>
              </styled>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
