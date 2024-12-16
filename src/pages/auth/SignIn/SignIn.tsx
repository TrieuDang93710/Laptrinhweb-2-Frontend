import CommonInput from '../../../components/atoms/Input';
import { handleBlurChecking } from '../../../utils/helper';
import useCombinedState from '../../../hooks/useCombinedState';
import { BaseSyntheticEvent, useState } from 'react';
import { Link } from 'react-router';
import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';

const SignIn = () => {
  const [passHidden, setPassHidden] = useState<boolean>(false);

  const [state, setField] = useCombinedState({
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
  });

  const loginSubmit = (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(e.target));
    console.log('Form values: ', formValues);
  };

  return (
    <div className='w-full h-full pt-20 px-2 pb-3 flex flex-col items-center justify-center'>
      <div className='md:w-1/3 sm:w-1/2 w-3/4 border rounded-md shadow-md shadow-slate-500 py-3 px-2 flex flex-col items-center justify-around'>
        <h2 className='text-2xl font-bold'>Sign In</h2>
        <form onSubmit={loginSubmit} className='w-full'>
          <CommonInput
            onblur={() => handleBlurChecking('emailError', state.email, setField)}
            inputValue={state.email}
            typeInput='email'
            setField={setField}
            field='email'
            error={state.emailError}
            hidden={false}
            nameInput={'email'}
            label_title='Email'
            placeholder='Please, enter email'
            labelTileClassName='text-white'
            inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
          />
          <CommonInput
            onblur={() => handleBlurChecking('passwordError', state.password, setField)}
            inputValue={state.password}
            typeInput='password'
            setField={setField}
            field='password'
            error={state.passwordError}
            hidden={false}
            iconPass={true}
            passHidden={passHidden}
            setPassHidden={setPassHidden}
            nameInput={'password'}
            label_title='Password'
            placeholder='Please, enter password'
            labelTileClassName='text-white'
            inputClassName='border-none bg-[#ffffff1d] text-slate-200 placeholder:text-slate-200 dark:placeholder:text-slate-200 outline-slate-800 focus:outline-green-500 focus:bg-transparent'
          />
          <span className='text-xs text-slate-800 py-2 px-4 flex justify-end cursor-pointer'>
            <Link className='text-right' to={'/auth/forgot'}>
              You have forgot password, right?
            </Link>
          </span>
          <button
            className='w-full py-2 my-2 bg-blue-700 border border-transparent text-slate-50 text-xl font-bold rounded-md shadow-md shadow-slate-600 hover:border-blue-700 hover:bg-blue-600 active:shadow-slate-800'
            type='submit'
          >
            Sign in
          </button>
        </form>
        <span className='w-full text-2xl py-3 flex justify-center gap-3'>
          <Link to={'/'}>
            <FacebookOutlined className='text-blue-700' />
          </Link>
          <Link to={'/'}>
            <GooglePlusOutlined className='text-red-700' />
          </Link>
        </span>
        <span className='text-xs text-slate-800 py-2 px-4 flex justify-end cursor-pointer'>
          You have not been an account, right?
          <Link className='text-blue-700 px-1 font-bold' to={'/auth/sign-up'}>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;