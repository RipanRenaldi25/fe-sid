import React from 'react';
import TextInput from '../Reusable/TextInput';
import NavigationItem from '../Reusable/NavigationItem';

function LoginForm() {
  return (
    <form className="relative">
      <div className="username">
        <TextInput placeholder="johndoe" title="Username" type="text" />
      </div>
      <div className="password">
        <TextInput placeholder="****" title="Password" type="password" />
      </div>
      <div className="flex justify-center mt-5 mb-2">
        <button type="submit" className="bg-yellow-dark w-3/4 rounded-full h-8 font-semibold">
          Log In
        </button>
      </div>
      <span className="text-center">
        <NavigationItem path="/signup" title="Doesnt have an acoount? Click here!" />
      </span>
    </form>
  );
}

export default LoginForm;
