import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import NotFoundPage from './pages/NotFound';
import NewTicketPage from './pages/NewTicket';
import ForgotPasswordPage from './pages/ForgotPassword';


function App() {
  
  const auth  =  useSelector(state => state.auth.isAuthenticated);



  const router = !auth ? createBrowserRouter([
    {path: '', element: <RootLayout/>, children:[
      {index: true, element: <LoginPage/>},
      {path: '/login', element: <LoginPage/>},
      {path: '/newticket', element: <Navigate to={'/login'}/>},
      {path: '/forgotpassword', element: <ForgotPasswordPage/>},
      {path: '*', element: <NotFoundPage/>}
    ]}

  ]) : createBrowserRouter([
    {path: '', element: <RootLayout/>, children:[
      {index: true, element: <HomePage/>},
      {path: '/newticket', element: <NewTicketPage/>},
      {path: '/login', element: <Navigate to={'/'}/>},
      {path: '/forgotpassword', element: <Navigate to={'/'}/>},
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
