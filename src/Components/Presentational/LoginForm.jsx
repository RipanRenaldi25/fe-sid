import React from 'react';
import TextInput from '../Reusable/TextInput';
import NavigationItem from '../Reusable/NavigationItem';
import { changeInputLoginActionCreator, clearInputLoginActionCreator, asyncLogin } from '../../states';
import useFormInput from '../../hooks/useInput';

function LoginForm() {
  const [loginInput, { onChangeInputHandler, asyncEventHandler }] = useFormInput('loginInput', { onChangeInput: changeInputLoginActionCreator, onClearAction: clearInputLoginActionCreator, onAsyncAction: asyncLogin });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await asyncEventHandler({
      username: loginInput.username,
      password: loginInput.password,
    });
  };

  return (
    <form className="relative" onSubmit={onSubmitHandler}>
      <div className="username">
        <TextInput placeholder="johndoe" title="Username" type="text" name="username" value={loginInput.username} onChange={onChangeInputHandler} />
      </div>
      <div className="password">
        <TextInput placeholder="****" title="Password" type="password" name="password" value={loginInput.password} onChange={onChangeInputHandler} />
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
