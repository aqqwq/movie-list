import { FC } from 'react';
import ListCard from './ListCard';
import { useLoaderData } from 'react-router-dom';
import { getMovies } from '../../api/apiMovies';
import { SearchMovies, Movies } from '../../api/apiMovies';
import { ParamParseKey, Params, ActionFunctionArgs } from 'react-router-dom';

const Paths = {
  title: '/search/:title',
} as const;

interface SearchLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.title>>;
}

const List: FC = () => {
  const movies = useLoaderData() as Movies;
  console.log(movies);
  return (
    <>
      {movies.map((movie: SearchMovies) => (
        <ListCard key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
};

export async function loader({ params }: SearchLoaderArgs) {
  const movies = await getMovies(params.title ?? '');
  return movies;
}

export default List;
