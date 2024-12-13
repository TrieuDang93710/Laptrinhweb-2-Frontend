import { Outlet } from 'react-router';
import HomePage from './pages/home/HomePage';

const RootLayout = () => {
  return (
    <main className='min-h-screen w-full'>
      Root Layout
      <HomePage />
      <Outlet />
    </main>
  );
};

export default RootLayout;
