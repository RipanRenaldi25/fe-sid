import React from 'react';
import AsideBarInformation from '../Presentational/AsideBarInformation';
import RegisterForm from '../Presentational/RegisterForm';
import { asyncRegister, changeInputActionCreator, clearInputRegisterActionCreator } from '../../states';
import useFormInput from '../../hooks/useInput';

function RegisterPage() {
  const [registerInput, { onChangeInputHandler, asyncEventHandler }] = useFormInput('registerInput', { onChangeInput: changeInputActionCreator, onAsyncAction: asyncRegister, onClearAction: clearInputRegisterActionCreator });
  const onRegisterHandler = (e) => {
    e.preventDefault();
    const name = `${registerInput.firstName} ${registerInput.lastName}`;
    const { username, password, nik } = registerInput;
    asyncEventHandler({
      name, username, password, nik, role: 'user', phoneNumber: registerInput.phoneNumber,
    });
  };
  return (
    <article className="mobile:flex-col mobile:gap-4 md:flex-row px-10 py-5 flex">
      <section className="flex-1 text-white">
        <div className="py-10 px-8 md:w-[57%] bg-gradient-to-tr from-primary-black to-secondary-black mx-auto min-h-[calc(70vh-100px)] rounded-xl">
          <h1 className="text-xl">Get In Touch</h1>
          <AsideBarInformation />
        </div>
      </section>
      <section className="flex-1">
        <div className="md:w-[80%] border-2 min-h-[calc(70vh-100px)] px-4 py-5">
          <RegisterForm onChangeInputHandler={onChangeInputHandler} registerInput={registerInput} onRegisterHandler={onRegisterHandler} />
        </div>
      </section>
    </article>
  );
}

export default RegisterPage;
