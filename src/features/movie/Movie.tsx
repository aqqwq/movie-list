import { FC } from 'react';
import {
  ActionFunctionArgs,
  useLoaderData,
  Params,
  ParamParseKey,
} from 'react-router-dom';
import { getMovieById } from '../../api/apiMovies';
import { MovieById } from '../../api/apiMovies';

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
    <div>
      <img src={movie.Poster} alt="" />
      <p>{movie.Title}</p>
      <p>{movie.imdbRating}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export async function loader({ params }: MovieLoaderArgs) {
  const movie = await getMovieById(params.id ?? '');
  return movie;
}

export default Movie;
