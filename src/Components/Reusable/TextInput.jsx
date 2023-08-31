import React from 'react';
import propTypes from 'prop-types';

function TextInput({ placeholder, title, type }) {
  return (
    <div>
      <label htmlFor={title}>
        <p>{title}</p>
        <input type={type} id={title} placeholder={placeholder} className="border border-[#aaa] h-8 rounded-md my-1 px-[15px] outline-none focus:shadow-md focus:shadow-[rgba(0,0,0,.15)] w-full invalid:text-pink-400" />
      </label>

    </div>
  );
}

TextInput.propTypes = {
  placeholder: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default TextInput;
