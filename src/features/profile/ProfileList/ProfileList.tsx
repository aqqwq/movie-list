import { FC } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import styles from './ProfileList.module.scss';
import { useAppSelector } from '../../../hooks';
import { listState } from './profileListSlice';
const ProfileList: FC = () => {
  const listData = useAppSelector((state) => state.list.list);
  return (
    <div className={styles.list}>
      {listData.map((movie: listState) => (
        <ProfileCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default ProfileList;
