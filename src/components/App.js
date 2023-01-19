import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies.js'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.js')
);
const Cast = lazy(() => import('./Cast/Cast.js'));
const Reviews = lazy(() => import('./Reviews/Reviews.js'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
    </>
  );
};
