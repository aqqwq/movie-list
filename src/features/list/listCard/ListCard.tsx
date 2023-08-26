import styles from './ListCard.module.scss';

import { SearchMovies } from '../../../api/apiMovies';

import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface ListCard {
  movie: SearchMovies;
}

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
