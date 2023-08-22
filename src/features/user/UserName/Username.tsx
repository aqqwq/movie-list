import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks';

const Username: FC = () => {
  const username = useAppSelector((state) => state.user.username);
  if (username === '') return 'Имя пользователя';
  return <div>{username}</div>;
};

export default Username;
