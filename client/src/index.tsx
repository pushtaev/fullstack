import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register/register';
import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Employees</h1>
  },
  {
    path: Paths.login,
    element:<Login />
  },
  {
    path: Paths.register,
    element:<Register />
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = { router }/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
