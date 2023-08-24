import styles from './SearchList.module.scss';

import { useAppSelector } from '../../../hooks';

import { useNavigate } from 'react-router-dom';
import React, { FC, useState } from 'react';

const SearchList: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.user.username);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchValue || !username) return;
    navigate(`/search/${searchValue}`);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        placeholder="Поиск фильмов, сериалов, аниме"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
    </form>
  );
};

export default SearchList;
