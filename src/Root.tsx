import HeaderCommon from './components/Header';
import FooterCommon from './components/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './pages/home/HomePage';
import { Link } from 'react-router';
import './components/Header/index.css';

const items = [
  {
    id: 1,
    title: 'Company manager',
    url_path: '/admin/company-manager'
  },
  {
    id: 2,
    title: 'User manager',
    url_path: '/admin/user-manager'
  },
  {
    id: 3,
    title: 'Logout',
    url_path: '/auth/sign-in'
  }
];

const menuItem = items.map((item) => (
  <li key={item.id} className='li_menu bg-slate-200 w-full'>
    <Link to={`${item.url_path}`}>{item.title}</Link>
  </li>
));

type Account = 'admin' | 'user';
interface RootLayoutProps {
  account: Account;
}

const RootLayout = ({ account }: RootLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/');
    }
  }, []);

  const [showNavModal, setShowNavModal] = useState<boolean>(false);

  // const role = 'admin';
  let layout;

  account = 'admin'

  switch (account) {
    case 'admin':
      layout = (
        <div className='w-full flex justify-between items-start'>
          <div className='w-1/4 min-h-screen flex flex-col justify-start items-center bg-slate-50 shadow-md shadow-slate-700 gap-4 px-4'>
            <div className={'relative pt-28 w-full flex flex-col justify-center items-center gap-1 cursor-pointer'}>
              <p className='text-[16px] text-slate-900 font-bold'>Trieu Dang</p>
              <span className='text-xs text-slate-800 font-medium'>
                <Link to={'/user-profile'}>dangbinhtrieu123@gmail.com</Link>
              </span>
            </div>
            <ul className='flex w-full md:flex-col justify-start items-start gap-4 py-4'>{menuItem}</ul>
          </div>
          {location.pathname !== '/' ? <Outlet /> : <HomePage />}
        </div>
      );
      break;
    case 'user':
      layout = <>{location.pathname !== '/' ? <Outlet /> : <HomePage />}</>;
      break;

    default:
      layout = <>{location.pathname !== '/' ? <Outlet /> : <HomePage />}</>;
      break;
  }

  return (
    <main className='relative w-full min-h-screen flex flex-col items-center justify-between'>
      <HeaderCommon showNavModal={showNavModal} setShowNavModal={setShowNavModal} />
      {/* {role === 'admin' ? (
        <div className='w-full flex justify-between items-start'>
          <div className='w-1/4 min-h-screen flex flex-col justify-start items-center bg-slate-50 shadow-md shadow-slate-700 gap-4 px-4'>
            <div className={'relative pt-28 w-full flex flex-col justify-center items-center gap-1 cursor-pointer'}>
              <p className='text-[16px] text-slate-900 font-bold'>Trieu Dang</p>
              <span className='text-xs text-slate-800 font-medium'>
                <Link to={'/user-profile'}>dangbinhtrieu123@gmail.com</Link>
              </span>
            </div>
            <ul className='flex w-full md:flex-col justify-start items-start gap-4 py-4'>{menuItem}</ul>
          </div>
          {location.pathname !== '/' ? <Outlet /> : <HomePage />}
        </div>
      ) : (
        <>{location.pathname !== '/' ? <Outlet /> : <HomePage />}</>
      )} */}
      {layout}

      {/* {showNavModal ? (
        <div className='hidden absolute z-10 top-16 right-10 md:w-[10%] bg-slate-300 py-4 px-2 rounded-md flex-col justify-center items-start gap-1 cursor-pointer'>
          <p className='text-[16px] text-slate-800 font-bold'>
            <Link to={'/profile'}>Edit profile</Link>
          </p>
          <p className='text-[16px] text-slate-800 font-bold'>Dark/Mode</p>
        </div>
      ) : null} */}

      <FooterCommon />
    </main>
  );
};

export default RootLayout;
