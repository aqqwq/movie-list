import { FC } from 'react';
import LeftBar from './LeftBar/LeftBar';
import ProfileList from './ProfileList/ProfileList';
import styles from './Profile.module.scss';

const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <LeftBar />
      <ProfileList />
    </div>
  );
};

export default Profile;
