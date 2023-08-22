import { FC } from 'react';
import ListCard from './listCard/ListCard';
import { useLoaderData } from 'react-router-dom';
import { getMovies } from '../../api/apiMovies';
import { SearchMovies } from '../../api/apiMovies';
import { ParamParseKey, Params, ActionFunctionArgs } from 'react-router-dom';
import styles from './List.module.scss';

const Paths = {
  title: '/search/:title',
} as const;

interface SearchLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.title>>;
}

const List: FC = () => {
  const movies = useLoaderData() as SearchMovies[];
  console.log(movies);

  console.log(movies);
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
