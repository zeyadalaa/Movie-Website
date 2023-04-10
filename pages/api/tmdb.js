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
  return genre.name;
}

// {
//   genres: [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' }
//   ]
// }