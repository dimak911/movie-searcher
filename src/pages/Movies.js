import { useState } from 'react';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import SearchInput from 'components/SearchInput/SearchInput';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  return (
    <Section>
      <SearchInput setMovies={setMovies} />
      {movies && <MoviesGallery movies={movies} />}
    </Section>
  );
};

export default Movies;
