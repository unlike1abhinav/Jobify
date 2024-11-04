import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Error,
  Landing,
  // AddJob,
  // Admin,
  // AllJobs,
  // DeleteJob,
  // EditJob,
  // Profile,
  // Stats
 } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement : <Error/>,
    children : [ 
      {
        index : true,
        element : <Landing/>
      },
      {
      path: 'register',
      element: <Register/>,
    },
    {
      path: 'login',
      element : <Login/>,
    },
    {
      path: 'dashboard',
      element: <DashboardLayout/>,
    },]}
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;