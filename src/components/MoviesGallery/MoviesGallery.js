import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import MovieItem from '../MovieItem/MovieItem';
import { Card } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridGap="20px"
      gridAutoRows="auto"
    >
      {movies.map(movie => (
        <li key={movie.id}>
          <Card to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </Card>
        </li>
      ))}
    </Box>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesGallery;
