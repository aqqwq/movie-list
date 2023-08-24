import styles from './SearchError.module.scss';

import { FC } from 'react';
const SearchError: FC = () => {
  return (
    <div className={styles.error}>
      Ничего не найдено, изменитие параметры поиска ❌
    </div>
  );
};

export default SearchError;
