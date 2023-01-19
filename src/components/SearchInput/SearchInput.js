import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { searchMoviesByName } from 'services/movie-api';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Error,
} from './SearchInput.styled';

const SearchInput = ({ setMovies }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { search: '' } });
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    () => searchParams.get('query') ?? ''
  );

  const onSubmit = ({ search }) => {
    setSearchValue(search);
    setSearchParams({ query: search });
    reset();
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    (async () => {
      const foundMovies = await searchMoviesByName(searchValue);
      setMovies(foundMovies);
    })();
  }, [searchValue, setMovies]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          {...register('search', { required: 'This field is required' })}
          placeholder="Search movie by name"
          autoFocus
        />
      </SearchForm>
      <Error>{errors.search?.message}</Error>
    </>
  );
};

SearchInput.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SearchInput;
