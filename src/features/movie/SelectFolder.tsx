import React, { FC } from 'react';
import styles from './SelectFolder.module.scss';
import { useAppDispatch } from '../../hooks';
import { addToCurrentList } from '../profile/ProfileList/profileListSlice';
import { MovieById } from '../../api/apiMovies';
import { useLoaderData } from 'react-router-dom';
const SelectFolder: FC = () => {
  const movie = useLoaderData() as MovieById;
  const dispatch = useAppDispatch();

  function handleAddToList() {
    const newListItem = {
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      imdbRating: movie.imdbRating,
      Genre: movie.Genre,
      Plot: movie.Plot,
    };
    console.log(newListItem);
    dispatch(addToCurrentList(newListItem));
  }

  return (
    <div className={styles.selectCard}>
      <button onClick={handleAddToList}>Смотрю</button>
      <button onClick={handleAddToList}>В планах</button>
      <button>Посмотрел</button>
      <button>На паузе</button>
      <button>Бросил</button>
    </div>
  );
};

export default SelectFolder;
