import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {HomeLayout,
  // Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
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
    children : [ {
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