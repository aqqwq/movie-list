import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchList: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`/search/${searchValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
    </form>
  );
};

export default SearchList;
