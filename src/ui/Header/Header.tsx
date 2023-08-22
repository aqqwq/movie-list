import { FC } from 'react';
import SearchList from '../../features/list/searchList/SearchList';
import { Link } from 'react-router-dom';
import Username from '../../features/user/UserName/Username';
import styles from './Header.module.scss';
const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link className={(styles['link'], styles.brand)} to="/list">
        Brand
      </Link>
      <SearchList />
      <Link className={styles.link} to="/profile">
        <Username />
      </Link>
    </div>
  );
};

export default Header;
