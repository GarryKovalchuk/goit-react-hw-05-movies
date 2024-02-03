import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <nav className={css.LoyoutNav}>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/movies">Movies</SNavLink>
      </nav>

      <div className={css.LoyoutContainer}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
