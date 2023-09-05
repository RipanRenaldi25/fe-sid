import React from 'react';
import { func, object } from 'prop-types';
import TextInput from '../Reusable/TextInput';
import NavigationItem from '../Reusable/NavigationItem';

function RegisterForm({ onRegisterHandler, onChangeInputHandler, registerInput }) {
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
        <TextInput title="Nomor Telepon" placeholder="0812323123" type="text" value={registerInput.phoneNumber} name="phoneNumber" onChange={onChangeInputHandler} />
      </div>
      <NavigationItem path="/login" title="Already have an account? Click here!" />
      <button type="submit" className="mt-2 w-full bg-yellow-dark rounded-md py-2 font-semibold">
        Submit
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onRegisterHandler: func.isRequired,
  onChangeInputHandler: func.isRequired,
  registerInput: object.isRequired,
};

export default RegisterForm;
