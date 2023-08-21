import { FC } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

const AppLayout: FC = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
