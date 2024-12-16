import { Link } from 'react-router';
import './index.css';
import { MenuUnfoldOutlined } from '@ant-design/icons';

const items = [
  {
    id: 1,
    title: 'Home',
    url_path: '/'
  },
  {
    id: 2,
    title: 'Company',
    url_path: '/company'
  },
  {
    id: 3,
    title: 'User',
    url_path: '/'
  }
];

const menuItem = items.map((item) => (
  <li key={item.id} className='li_menu'>
    <Link to={`${item.url_path}`}>{item.title}</Link>
  </li>
));

interface HeaderCommonProps {
  showNavModal: boolean;
  setShowNavModal: (value: boolean) => void;
}

const HeaderCommon = ({ showNavModal, setShowNavModal }: HeaderCommonProps) => {
  const handleMouseEnter = () => {
    setShowNavModal(!showNavModal);
  };
  const handleMouseLeave = () => {
    setShowNavModal(!showNavModal);
  };

  return (
    <nav className='w-full flex justify-between items-center bg-white py-3 px-3 shadow-md shadow-slate-500 fixed overflow-y-auto z-30'>
      <aside className='md:w-1/6 w-1/2 px-2 flex items-center gap-4'>
        <MenuUnfoldOutlined className='md:hidden text-xl font-bold cursor-pointer hover:text-slate-600 active:shadow-md active:shadow-slate-400' />
        <h2 className='font-bold text-2xl text-slate-900'>Welcome</h2>
      </aside>
      <ul className='hidden w-1/2 md:flex justify-start items-center gap-2'>{menuItem}</ul>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={'relative z-40 md:w-1/6 flex flex-col justify-center items-center gap-1 cursor-pointer'}
      >
        <p className='text-[16px] text-slate-900 font-bold'>Trieu Dang</p>
        <span className='text-xs text-slate-800 font-medium'><Link to={'/user-profile'}>dangbinhtrieu123@gmail.com</Link></span>
      </div>
      <div className='md:w-1/6 hidden justify-start items-center gap-2'>
        <button type='submit' className='button_nav'>
          <Link to={'/auth/sign-in'}>Sign in</Link>
        </button>
        <button type='submit' className='button_nav'>
          <Link to={'/auth/sign-up'}>Sign up</Link>
        </button>
      </div>
    </nav>
  );
};

export default HeaderCommon;
