import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../ServiceAPI/api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <div className={css.CastContainer}>
      {credits.length > 0 && (
        <ul className={css.CastList}>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li className={css.CastItem} key={id}>
                <img className={css.Img} src={photo} alt={name} />
                <div className={css.CastDescr}>
                  <h3 className={css.CastName}>{name}</h3>
                  <p className={css.CastChar}>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
