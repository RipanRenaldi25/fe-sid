import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccordionList from '../Presentational/AccordionList';
import { toggleAccordionACtioncreator } from '../../states';

function FAQ() {
  const { accordion: accordions } = useSelector((states) => states);
  const dispatch = useDispatch();
  const onClickAccordionHandler = (index) => {
    dispatch(toggleAccordionACtioncreator(index));
  };
  return (
    <article className="mobile:mt-0 mobile:w-screen md:mt-10 md:w-full">
      <header className="flex justify-center items-center flex-col gap-2 mobile:mt-10">
        <h1 className="mobile:text-2xl md:text-4xl font-semibold">FAQs</h1>
        <h2 className="mobile:text-xl md:text-3xl font-thin">Frequently Asked Questions</h2>
        <p className="text-slate-500">Have Question? We`re here to help</p>
      </header>
      <section className="accordion flex flex-col justify-center items-center gap-4 mt-6">
        <AccordionList accordionList={accordions} onClickHandler={onClickAccordionHandler} />

      </section>
    </article>
  );
}

export default FAQ;
