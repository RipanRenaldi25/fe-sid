import {
  arrayOf, bool, func, object, string,
} from 'prop-types';
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function SelectInput({
  options, onChangeHandler, documentType, shouldIconHidden, name = '',
}) {
  return (
    <div className="w-full relative">
      <span className="absolute z-10 top-1/2 -translate-y-1/2 right-4 text-xl" hidden={shouldIconHidden}><IoMdArrowDropdown /></span>
      <select className="relative w-full bg-none  outline-none py-2 px-4 rounded-lg appearance-none" onChange={onChangeHandler} value={documentType} name={name}>
        {options.map((option) => (
          <option name={option.value} value={option.value} key={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  options: arrayOf(object).isRequired,
  onChangeHandler: func.isRequired,
  documentType: string.isRequired,
  shouldIconHidden: bool,
  name: string.isRequired,
};

export default SelectInput;
