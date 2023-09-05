import { func, bool, string } from 'prop-types';
import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function Accordion({
  title, description, isActive, onClickHandler,
}) {
  return (
    <div className={`group w-3/4 box-lg border px-10 py-4 relative rounded-lg shadow-lg overflow-hidden ${isActive ? 'h-full' : 'h-[80px]'}`}>
      <header className="flex justify-between mb-10 items-center hover:cursor-pointer" onClick={onClickHandler}>
        <h1 className="mobile:text-xl md:text-2xl">{title}</h1>
        <button
          type="button"
          className="text-2xl absolute top-1/2 right-8 -translate-y-1/2"
        >
          {isActive ? (<AiOutlineMinusCircle />) : (<AiOutlinePlusCircle />)}
        </button>
      </header>
      <div className="overflow-hidden mobile:text-sm md:text-base">
        <p>{description}</p>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  isActive: bool.isRequired,
  onClickHandler: func.isRequired,
};

export default Accordion;
