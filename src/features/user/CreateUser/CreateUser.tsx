import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { updateName } from '../userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './CreateUser.module.scss';

const createUser: FC = () => {
  const [username, setUserName] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === '') return;
    dispatch(updateName(username));
    navigate('/list');
  }

  return (
    <div className={styles.createUser}>
      <form onSubmit={handleSubmit}>
        <div className={styles.descr}>
          Вы попали на сайт, где вы можите отслеживать статус просмотра{' '}
          <span>фильмов</span>, <span>сериалов</span>, <span>аниме</span>.
        </div>
        <p>Для начала использования введите имя пользователя.</p>
        <input
          type="text"
          value={username}
          placeholder="Введите имя пользователя"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
        <button>Принять</button>
      </form>
    </div>
  );
};

export default createUser;
