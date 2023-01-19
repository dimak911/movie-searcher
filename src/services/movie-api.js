import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const trendingData = await axios.get('trending/movie/day', {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
    },
  });
  return trendingData.data.results;
};

export const searchMoviesByName = async movie => {
  const foundMovies = await axios.get('search/movie', {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      query: movie,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
  });
  return foundMovies.data.results;
};

export const getMovieById = async id => {
  const foundMovie = await axios.get(`movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      language: 'en-US',
    },
  });
  return foundMovie.data;
};

export const getMovieCreditsById = async id => {
  const foundMovie = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      language: 'en-US',
    },
  });
  return foundMovie.data;
};

export const getReviewsByMovieId = async (id, page = 1) => {
  const foundMovie = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      language: 'en-US',
      page,
    },
  });
  return foundMovie.data.results;
};
