import React, { FC, useState } from 'react';
import styles from './SelectFolder.module.scss';

const SelectFolder: FC = () => {
  const [selectValue, setSelectValue] = useState('');
  console.log(selectValue);

  return (
    <div className={styles.selectCard}>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setSelectValue(e.currentTarget.innerHTML)
        }
      >
        Смотрю
      </button>
      <button>В планах</button>
      <button>Посмотрел</button>
      <button>На паузе</button>
      <button>Бросил</button>
    </div>
  );
};

export default SelectFolder;
