import { listState } from './profileListSlice';

import ProfileCard from '../ProfileCard/ProfileCard';
import { useAppSelector } from '../../../hooks';

import { useParams } from 'react-router-dom';
import { FC } from 'react';
export let moviesToRender: listState[] = [];
const ProfileList: FC = () => {
  const { nickName, status } = useParams();
  console.log(nickName, status);
  const { current, planning, complete, paused, dropped } = useAppSelector(
    (state) => state.list
  );

  if (status === 'current') moviesToRender = current;
  if (status === 'planning') moviesToRender = planning;
  if (status === 'complete') moviesToRender = complete;
  if (status === 'paused') moviesToRender = paused;
  if (status === 'dropped') moviesToRender = dropped;

  return (
    <div>
      {moviesToRender.map((movie) => (
        <ProfileCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default ProfileList;
