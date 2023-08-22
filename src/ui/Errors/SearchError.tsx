import { FC } from 'react';
import styles from './SearchError.module.scss';
const SearchError: FC = () => {
  return (
    <div className={styles.error}>
      Ничего не найдено, изменитие параметры поиска ❌
    </div>
  );
};

export default SearchError;
