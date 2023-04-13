import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import styles from '@/styles/Card.module.css'
import { getAllGenreName , getTvSeries ,getGenreName} from '../api/tmdb'

const inter = Inter({ subsets: ['latin'] })

export default function TvSeries(props) {
  return (
    <>
      <Layout/>
      <div className={styles.cardscontainer}>
        {
          props.movies.map((movie)=>(
            <div key={movie.id}>
              <Card title={movie.title||movie.name} overview={movie.overview} poster={movie.poster_path} genre_ids={movie.genre_name}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
    const movies  = await getTvSeries()
    const allGenreNames = await getAllGenreName()
  
    const genreIds = movies.flatMap((movie) => movie.genre_ids);
    
    const genrePromises = genreIds.map((id) => getGenreName(allGenreNames,id));
    const genres = await Promise.all(genrePromises);
  
    const moviesWithGenres = movies.map(async(movie, index) => {
      const genreNames = movie.genre_ids.map((id) =>
        getGenreName(allGenreNames, id)
      );
      const movieGenreNames = await Promise.all(genreNames);
      const filteredGenreNames = movieGenreNames.filter((name) => name !== null);
      return {
        ...movie,
        genre_name: filteredGenreNames,
      };
    });
  
    const MoviesWithGen = await Promise.all(moviesWithGenres);
    return {
      props: {
        movies: MoviesWithGen,
      },
    };
  }
  