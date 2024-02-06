import css from './MovieList.module.css';
import { NavLink } from 'react-router-dom';

const MovieList = ({ movies, location }) => (
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
);

export default MovieList;
