import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import List, { loader as listLoader } from '../features/list/List';
import EmptyList from '../features/list/EmptyList';
import Profile from '../features/profile/Profile';

import Movie, { loader as movieLoader } from '../features/movie/Movie';
import AppLayout from '../ui/AppLayout';
import Error from '../ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <EmptyList />,
      },
      {
        path: '/search/:title',
        element: <List />,
        loader: listLoader,
        errorElement: <Error />,
      },
      {
        path: '/profile/:nickName',
        element: <Profile />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
        loader: movieLoader,
        errorElement: <Error />,
      },
    ],
  },
]);
const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
