import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import List, { loader as listLoader } from '../features/list/List';
import EmptyList from '../features/list/emptyList/EmptyList';
import Profile from '../features/profile/Profile';
import SearchError from '../ui/Errors/SearchError';
import Movie, { loader as movieLoader } from '../features/movie/Movie';
import AppLayout from '../ui/AppLayout/AppLayout';

import CreateUser from '../features/user/CreateUser/CreateUser';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <CreateUser />,
      },
      {
        path: '/list',
        element: <EmptyList />,
      },
      {
        path: '/search/:title',
        element: <List />,
        loader: listLoader,
        errorElement: <SearchError />,
      },
      {
        path: '/profile/:nickName',
        element: <Profile />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
        loader: movieLoader,
        errorElement: <SearchError />,
      },
    ],
  },
]);
const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
