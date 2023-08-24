import {
  addToCurrent,
  addToPlanning,
  addToComplete,
  addToPaused,
  addToDropped,
} from '../profile/ProfileList/profileListSlice';

import { MovieById } from '../../api/apiMovies';

import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FC, useState } from 'react';

const SelectFolder: FC = () => {
  const movie = useLoaderData() as MovieById;
  const dispatch = useDispatch();

  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  const buttonLabels = [
    'Смотрю',
    'В планах',
    'Посмотрел',
    'На паузе',
    'Бросил',
  ];

  function handleAddToList(index: number) {
    setActiveButtonIndex(index);

    const newListItem = {
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      imdbRating: movie.imdbRating,
      Genre: movie.Genre,
      Plot: movie.Plot,
    };

    if (index === 0) dispatch(addToCurrent(newListItem));
    if (index === 1) dispatch(addToPlanning(newListItem));
    if (index === 2) dispatch(addToComplete(newListItem));
    if (index === 3) dispatch(addToPaused(newListItem));
    if (index === 4) dispatch(addToDropped(newListItem));
  }

  return (
    <div>
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          onClick={() => handleAddToList(index)}
          className={activeButtonIndex === index ? 'active' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SelectFolder;
