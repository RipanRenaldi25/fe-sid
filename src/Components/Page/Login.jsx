import React from 'react';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import loginAnimation from '../../assets/images/login-animation2.gif';
import LoginForm from '../Presentational/LoginForm';

function Login() {
  return (
    <article className="mobile:flex-col mobile:gap-4 px-10 py-5 flex md:flex-row ">
      <section className="flex-1 text-white">
        <div className="py-10 px-8 md:w-[57%] bg-gradient-to-tr from-primary-black to-secondary-black mx-auto min-h-[calc(70vh-100px)] rounded-xl">
          <img src={loginAnimation} alt="login-animation" />
        </div>
      </section>
      <section className="flex-1">
        <div className="md:w-[70%] border-2 min-h-[calc(75vh-100px)] px-4 py-10 rounded-lg">
          <header className="flex justify-center">
            <span className="text-4xl"><PiUsersThreeDuotone /></span>
          </header>
          <h1 className="text-center mt-4 text-2xl font-bold">Welcome Back</h1>
          <p className="text-center">Please enter your account</p>
          <LoginForm />
        </div>
      </section>
    </article>
  );
}

export default Login;
