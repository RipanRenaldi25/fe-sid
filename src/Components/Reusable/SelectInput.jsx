import { arrayOf, object } from 'prop-types';
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function SelectInput({ options }) {
  return (
    <div className="w-full relative">
      <span className="absolute z-10 top-1/2 -translate-y-1/2 right-4 text-xl"><IoMdArrowDropdown /></span>
      <select className="relative w-full bg-none  outline-none py-2 px-4 rounded-lg appearance-none">
        {options.map((option) => (
          <option name={option.title} value={option.value} key={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  options: arrayOf(object).isRequired,
};

export default SelectInput;
