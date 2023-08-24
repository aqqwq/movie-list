import styles from './Header.module.scss';

import { useAppSelector } from '../../hooks';
import Username from '../../features/user/UserName/Username';
import SearchList from '../../features/list/searchList/SearchList';

import { Link } from 'react-router-dom';
import { FC } from 'react';

const Header: FC = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className={styles.header}>
      <Link className={(styles['link'], styles.brand)} to="/">
        Cine
      </Link>
      <SearchList />
      <Link className={styles.link} to={`/profile/${username}/current`}>
        <Username />
      </Link>
    </div>
  );
};

export default Header;
