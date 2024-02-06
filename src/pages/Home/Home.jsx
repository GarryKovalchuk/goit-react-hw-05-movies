import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../components/ServiceAPI/api';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <div className={css.HomeContainer}>
      <h1 className={css.HomeTitle}>Tranding today</h1>
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </div>
  );
};

export default Home;
