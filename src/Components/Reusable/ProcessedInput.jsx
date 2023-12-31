import { func, object, string } from 'prop-types';
import React from 'react';
import SelectInput from './SelectInput';

const processOptions = [
  {
    title: 'Status',
    value: '',
  },
  {
    title: 'Belum Diproses',
    value: 'UNPROCESS',
  },
  {
    title: 'Sedang Diproses',
    value: 'PROCESS',
  },
  {
    title: 'Telah Diproses',
    value: 'PROCESSED',
  },
];

function ProcessedInput({ icon, value, onChangeHandler }) {
  return (
    <div className="flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative">
      <div>
        <SelectInput documentType={value} options={processOptions} onChangeHandler={(e) => { onChangeHandler({ key: e.target.name, value: e.target.value }); }} shouldIconHidden name="process" />
      </div>
      <div className=" flex items-center p-3 text-purple-color font-bold text-2xl border-l">
        <span>{icon}</span>
      </div>
    </div>
  );
}

ProcessedInput.propTypes = {
  icon: object.isRequired,
  value: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default ProcessedInput;
