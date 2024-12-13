import { createRoot } from 'react-dom/client';
import './index.css';
import RootLayout from './Root.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/auth/SignIn.tsx';
import SignUp from './pages/auth/SignUp.tsx';
import HomePage from './pages/home/HomePage.tsx';
import UserDashboard from './pages/dashboard/UserDashboard.tsx';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: 'auth',
        children: [
          {
            path: 'sign-in',
            Component: SignIn
          },
          {
            path: 'sign-up',
            Component: SignUp
          }
        ]
      },
      {
        path: 'home',
        Component: HomePage
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'user',
            Component: UserDashboard
          },
          {
            path: 'admin',
            Component: AdminDashboard,
            children: [

            ]
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
