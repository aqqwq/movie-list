import { FC } from 'react';
import { SearchMovies } from '../../api/apiMovies';
interface ListCard {
  movie: SearchMovies;
}
const ListCard: FC<ListCard> = ({ movie }) => {
  return (
    <>
      <img src={movie.Poster} alt="" />
      <p>{movie.Title}</p>
    </>
  );
};

export default ListCard;
