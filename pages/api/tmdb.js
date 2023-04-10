import axios from 'axios';

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  const response = await axios.get(`${TMDB_API_BASE_URL}/movie/popular`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
    },
  });

  return response.data.results;
}

export async function getAllGenreName() {
  const response = await axios.get(`${TMDB_API_BASE_URL}/genre/movie/list`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
    },
  });
  
  return response.data;
}

export async function getGenreName(allGenreNames,genreId) {
  const genre = allGenreNames.genres.find(g => g.id === genreId);
  return genre? genre.name : null;
}


export async function getTrendingMovies() {
  const response = await axios.get(`${TMDB_API_BASE_URL}/trending/all/week`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
    },
  });
  
  return response.data.results;
}

export async function getTvSeries() {
  const response = await axios.get(`${TMDB_API_BASE_URL}/tv/popular`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
    },
  });
  
  return response.data.results;
}