import styles from './ProfileCard.module.scss';

// import { moviesToRender } from './../ProfileList/ProfileList';

import { listMovie } from '../ProfileList/profileListSlice';

import { FC } from 'react';
const ProfileCard: FC<listMovie> = ({ movie }) => {
  // function handleRemove(id) {
  //   moviesToRender.filter((item, index) => item.imdbID !== id);
  // }
  return (
    <div className={styles.card}>
      <img src={movie.Poster} alt="poster"></img>

      <div className={styles.info}>
        <div className={styles.top}>
          <div className={styles.title}>{movie.Title}</div>
          <div className={styles.year}>{movie.Year}</div>
          <div className={styles.rating}>
            {movie.imdbRating} <span>/10</span>{' '}
          </div>
          <button
            className={styles.remove}
            // onClick={() => handleRemove(movie.imdbID)}
          >
            ❌
          </button>
        </div>
        <div className={styles.genres}>
          <span>Жанры:</span>
          {movie.Genre}
        </div>
        <div className={styles.plot}>
          <span>Описание:</span>
          {movie.Plot}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
