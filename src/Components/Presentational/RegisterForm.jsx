import React from 'react';
import TextInput from '../Reusable/TextInput';
import NavigationItem from '../Reusable/NavigationItem';

function RegisterForm() {
  return (
    <form>
      <div className="flex justify-between mb-3">
        <TextInput title="First Name" placeholder="John" type="text" />
        <TextInput title="Last Name" placeholder="Doe" type="text" />
      </div>
      <div className="flex flex-col gap-3 mb-7">
        <TextInput title="NIK" placeholder="3273xxxxxxx" type="text" />
        <TextInput title="Username" placeholder="johndoe" type="text" />
        <TextInput title="Password" placeholder="****" type="password" />
      </div>
      <NavigationItem path="login" title="Already have an account? Click here!" />
      <button type="submit" className="mt-2 w-full bg-yellow-dark rounded-md py-2 font-semibold">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
