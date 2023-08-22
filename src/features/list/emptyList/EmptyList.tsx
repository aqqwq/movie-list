import { FC } from 'react';
import styles from './EmptyList.module.scss';
const EmptyList: FC = () => {
  return (
    <div className={styles.emptyList}>
      <h1>Пока что вы находитесь на пустой странице🥲</h1>
      <div>
        Но это легко исправить😊. Вам достаточно ввести в поисковую строку
        название <span>фильма</span>, <span>сериала</span>, <span>аниме</span>,{' '}
        <span>шоу</span> и т.д.
        <br /> Надеюсь, вы найдете то, что хотите😘.
      </div>
    </div>
  );
};

export default EmptyList;
