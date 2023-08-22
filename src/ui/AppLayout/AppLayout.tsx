import { FC } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import styles from './AppLayout.module.scss';
const AppLayout: FC = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
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
