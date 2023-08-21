import { FC } from 'react';
import { SearchMovies } from '../../api/apiMovies';
import { useNavigate } from 'react-router-dom';
interface ListCard {
  movie: SearchMovies;
}
const ListCard: FC<ListCard> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  return (
    <div onClick={handleClick}>
      <img src={movie.Poster} alt="" />
      <p>{movie.Title}</p>
    </div>
  );
};

export default ListCard;
