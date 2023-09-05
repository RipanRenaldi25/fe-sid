import { func, object, string } from 'prop-types';
import React, { useRef } from 'react';

function DateInput({ icon, value, onChangeHandler }) {
  const dateRef = useRef();
  return (
    <div className="flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative" onClick={() => dateRef.current.click()}>
      <div className="text-sm text-gray-400 mr-4 px-4">
        <p className={`${value && 'text-black'}`}>
          {value || 'Cari tanggal'}
        </p>
      </div>
      <input
        ref={dateRef}
        type="date"
        className="opacity-0 absolute top-0 bottom-0 left-0 right-0"
        name="date"
        onChange={(e) => onChangeHandler({ key: e.target.name, value: e.target.value })}
        value={value}
      />
      <div className=" flex items-center p-3 text-purple-color font-bold text-2xl border-l">
        <span>{icon}</span>
      </div>
    </div>
  );
}

DateInput.propTypes = {
  icon: object.isRequired,
  value: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default DateInput;
