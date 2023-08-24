import styles from './AppLayout.module.scss';

import Loader from '../Loader/Loader';
import Header from '../Header/Header';

import { Outlet, useNavigation } from 'react-router-dom';
import { FC } from 'react';

const AppLayout: FC = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
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
    </div>
  );
};

export default AppLayout;
