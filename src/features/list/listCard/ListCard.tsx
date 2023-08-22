import { FC } from 'react';
import { SearchMovies } from '../../../api/apiMovies';
import { useNavigate } from 'react-router-dom';
interface ListCard {
  movie: SearchMovies;
}
import styles from './ListCard.module.scss';
const ListCard: FC<ListCard> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={movie.Poster} alt="" />
      <div className={styles.title}>{movie.Title}</div>
    </div>
  );
};

export default ListCard;
