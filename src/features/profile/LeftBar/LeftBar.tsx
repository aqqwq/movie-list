import styles from './LeftBar.module.scss';

import { useAppSelector } from '../../../hooks';

import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

const LeftBar: FC = () => {
  const username = useAppSelector((state) => state.user.username);
  const navigate = useNavigate();

  const handleTabClick = (status: string) => {
    navigate(`/profile/${username}/${status}`);
  };

  return (
    <div className={styles.leftBar}>
      <div className={styles.info}>
        <img src="https://via.placeholder.com/200x200" alt=""></img>
        <div className={styles.username}>{username}</div>
        <div className={styles.btns}>
          <button onClick={() => handleTabClick('current')}>Смотрю</button>
          <button onClick={() => handleTabClick('planning')}>В планах</button>
          <button onClick={() => handleTabClick('complete')}>Посмотрел</button>
          <button onClick={() => handleTabClick('paused')}>На паузе</button>
          <button onClick={() => handleTabClick('dropped')}>Бросил</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
