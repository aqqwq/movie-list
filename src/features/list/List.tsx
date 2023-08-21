import { FC } from 'react';
import ListCard from './ListCard';
import { useLoaderData } from 'react-router-dom';
import { getMovies } from '../../api/apiMovies';
import { SearchMovies, Movies } from '../../api/apiMovies';

interface Params {
  title: string;
}

const List: FC = () => {
  const movies = useLoaderData() as Movies;
  console.log(movies);
  return (
    <>
      {movies.movies.map((movie: SearchMovies) => (
        <ListCard key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
};

export async function loader({ params }: { params: Params }) {
  const movies = await getMovies(params.title);
  return movies;
}

export default List;
