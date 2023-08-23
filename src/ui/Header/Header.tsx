import { FC } from 'react';
import SearchList from '../../features/list/searchList/SearchList';
import { Link } from 'react-router-dom';
import Username from '../../features/user/UserName/Username';
import styles from './Header.module.scss';
import { useAppSelector } from '../../hooks';
const Header: FC = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className={styles.header}>
      <Link className={(styles['link'], styles.brand)} to="/list">
        Cine
      </Link>
      <SearchList />
      <Link className={styles.link} to={`/profile/${username}`}>
        <Username />
      </Link>
    </div>
  );
};

export default Header;
