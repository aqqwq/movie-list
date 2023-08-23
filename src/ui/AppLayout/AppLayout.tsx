import { FC, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import styles from './AppLayout.module.scss';
const AppLayout: FC = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const [click, setClick] = useState(false);
  return (
    <div className={styles.layout}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}

      <div>
        <button
          onClick={() => setClick(!click)}
          className={`style ${click ? 'style-2' : ''}`}
        >
          Кнопка
        </button>
      </div>
    </div>
  );
};

export default AppLayout;
