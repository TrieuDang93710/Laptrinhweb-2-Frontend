import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='w-full h-full'>
      <h2>AuthLayout Page</h2>
      <SignIn />
      <SignUp />
      {children}
    </div>
  );
};

export default AuthLayout;
