import { FC } from 'react';
import SearchList from '../features/list/SearchList';
import { Link } from 'react-router-dom';
const Header: FC = () => {
  return (
    <div>
      <Link to="/">Brand</Link>
      <SearchList />
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Header;
