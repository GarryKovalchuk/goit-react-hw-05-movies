import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/ServiceAPI/api';
import css from './MovieDetails.module.css';
import { NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <div>
      <button className={css.DetBtn} type="button" onClick={backToMovies}>
        Back to movies
      </button>
      {movie && (
        <div>
          <div className={css.DetContainer}>
            <img className={css.DetImg} src={poster} alt={title} />
            <div className={css.DetInfo}>
              <h2 className={css.DetTitle}>
                {title} ({releaseYear})
              </h2>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </div>
          </div>

          <h3 className={css.DetAddInfo}>Additional information</h3>

          <ul className={css.DetList}>
            <li>
              <NavLink to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <styled
                className={css.InfoLink}
                to={'reviews'}
                state={{ from: location?.state?.from }}
              >
                Reviews
              </styled>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
