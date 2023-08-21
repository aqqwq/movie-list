import { FC } from 'react';
import SearchList from '../src/features/list/SearchList';
const Header: FC = () => {
  return (
    <div>
      <div>Brand</div>
      <SearchList />
      <div>Profile</div>
    </div>
  );
};

export default Header;
