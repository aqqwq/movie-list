import { FC } from 'react';
import styles from './LeftBar.module.scss';
import { useAppSelector } from '../../../hooks';
const LeftBar: FC = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div className={styles.leftBar}>
      <div className={styles.info}>
        <img src="https://via.placeholder.com/200x200" alt=""></img>
        <div className={styles.username}>{username}</div>
        <div className={styles.btns}>
          <button>Смотрю</button>
          <button>В планах</button>
          <button>Посмотрел</button>
          <button>На паузе</button>
          <button>Бросил</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
