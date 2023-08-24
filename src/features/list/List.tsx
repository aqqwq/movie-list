import ListCard from './listCard/ListCard';

import styles from './List.module.scss';

import { getMovies, SearchMovies } from '../../api/apiMovies';

import {
  useLoaderData,
  ParamParseKey,
  Params,
  ActionFunctionArgs,
} from 'react-router-dom';
import { FC } from 'react';

const Paths = {
  title: '/search/:title',
} as const;

interface SearchLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.title>>;
}

const List: FC = () => {
  const movies = useLoaderData() as SearchMovies[];

  return (
    <div className={styles.list}>
      {movies.map((movie: SearchMovies) => (
        <ListCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export async function loader({ params }: SearchLoaderArgs) {
  const movies = await getMovies(params.title ?? '');
  return movies;
}

export default List;
