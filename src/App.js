
import './App.css';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import NotFoundPage from './pages/NotFound';
import UserPage, {loader as userLoader} from './pages/UserPage';


function App() {
  
  const auth  =  useSelector(state => state.auth.isAuthenticated);

  const router = !auth ? createBrowserRouter([
    {path: '', element: <RootLayout/>, children:[
      {index: true, element: <LoginPage/>},
      {path: '/login', element: <LoginPage/>},
      {path: '/viewprofile', element: <Navigate to={'/login'}/>},
      {path: '*', element: <NotFoundPage/>}
    ]}

  ]) : createBrowserRouter([
    {path: '', element: <RootLayout/>, children:[
      {index: true, element: <HomePage/>},
      {path: '/viewprofile', element: <UserPage/>, loader:userLoader},
      {path: '/login', element: <Navigate to={'/'}/>},
      {path: '*', element: <NotFoundPage/>}

    ]}
  ])

  return (
   
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
    
  );
}

export default App;
