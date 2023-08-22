import { FC } from 'react';
import {
  ActionFunctionArgs,
  useLoaderData,
  Params,
  ParamParseKey,
} from 'react-router-dom';
import { getMovieById } from '../../api/apiMovies';
import { MovieById } from '../../api/apiMovies';
import SelectFolder from './SelectFolder';
import styles from './Movie.module.scss';

const Paths = {
  id: '/movie/:id',
} as const;

interface MovieLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.id>>;
}

const Movie: FC = () => {
  const movie = useLoaderData() as MovieById;
  console.log(movie);
  return (
    <>
      <div className={styles.movie}>
        <div className={styles.leftBar}>
          <img src={movie.Poster} alt="poster" />
        </div>
        <div className={styles.info}>
          <h1>
            {movie.Title} <span>{movie.Year}</span>
          </h1>
          <div className={styles.pieceOfInfo}>
            <span>Рейтинг на imdb:</span> {movie.imdbRating}
          </div>
          <div className={styles.pieceOfInfo}>
            <span>Возрастной рейтинг:</span> {movie.Rated}
          </div>
          <div className={styles.pieceOfInfo}>
            <span>Время фильма/одной серии:</span> {movie.Runtime}
          </div>
          <div className={styles.pieceOfInfo}>
            <span>Всего сезонов:</span> {movie.totalSeasons}
          </div>
          <div className={styles.pieceOfInfo}>
            <span>Жанры:</span> {movie.Genre}
          </div>
          <div className={styles.pieceOfInfo}>
            <span>Описание:</span> {movie.Plot}
          </div>
          <SelectFolder />
        </div>
      </div>
    </>
  );
};

export async function loader({ params }: MovieLoaderArgs) {
  const movie = await getMovieById(params.id ?? '');
  return movie;
}

export default Movie;
