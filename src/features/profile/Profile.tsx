import ProfileList from './ProfileList/ProfileList';
import styles from './Profile.module.scss';
import LeftBar from './LeftBar/LeftBar';

import { FC } from 'react';

const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <LeftBar />
      <ProfileList />
    </div>
  );
};

export default Profile;
