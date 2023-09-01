import React from 'react';
import TextInput from '../Reusable/TextInput';
import NavigationItem from '../Reusable/NavigationItem';
import { changeInputActionCreator, asyncRegister, clearInputRegisterActionCreator } from '../../states';
import useFormInput from '../../hooks/useInput';

function RegisterForm() {
  const [registerInput, { onChangeInputHandler, asyncEventHandler }] = useFormInput('registerInput', { onChangeInput: changeInputActionCreator, onAsyncAction: asyncRegister, onClearAction: clearInputRegisterActionCreator });

  const onRegisterHandler = (e) => {
    e.preventDefault();
    const name = `${registerInput.firstName} ${registerInput.lastName}`;
    const { username, password, nik } = registerInput;
    asyncEventHandler({
      name, username, password, nik, role: 'user',
    });
  };
  return (
    <form onSubmit={onRegisterHandler}>
      <div className="flex justify-between mb-3">
        <TextInput title="First Name" placeholder="John" type="text" value={registerInput.firstName} name="firstName" onChange={onChangeInputHandler} />
        <TextInput title="Last Name" placeholder="Doe" type="text" value={registerInput.lastName} name="lastName" onChange={onChangeInputHandler} />
      </div>
      <div className="flex flex-col gap-3 mb-7">
        <TextInput title="NIK" placeholder="3273xxxxxxx" type="text" value={registerInput.nik} name="nik" onChange={onChangeInputHandler} />
        <TextInput title="Username" placeholder="johndoe" type="text" value={registerInput.username} name="username" onChange={onChangeInputHandler} />
        <TextInput title="Password" placeholder="****" type="password" value={registerInput.password} name="password" onChange={onChangeInputHandler} />
      </div>
      <NavigationItem path="login" title="Already have an account? Click here!" />
      <button type="submit" className="mt-2 w-full bg-yellow-dark rounded-md py-2 font-semibold">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
