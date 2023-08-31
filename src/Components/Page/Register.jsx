import React from 'react';
import AsideBarInformation from '../Presentational/AsideBarInformation';

function RegisterPage() {
  return (
    <article className="px-10 py-5 flex">
      <section className="flex-1 text-white">
        <div className="py-10 px-8 w-[57%] bg-gradient-to-tr from-primary-black to-secondary-black mx-auto min-h-[calc(70vh-100px)] rounded-xl">
          <h1 className="text-xl">Get In Touch</h1>
          <AsideBarInformation />
        </div>
      </section>
      <section className="flex-1">
        <h1>right</h1>
      </section>
    </article>
  );
}

export default RegisterPage;
