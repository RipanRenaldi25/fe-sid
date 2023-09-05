import { func, object, string } from 'prop-types';
import React from 'react';

function SearchBar({
  icon, placeholder, value, onChangeHandler, parentStyle, name,
}) {
  return (
    <div id="search" className={`relative flex gap-4 items-center shadow-lg w-1/3 py-3 px-4 rounded-xl border-2 ${parentStyle}`}>
      <div className="flex items-center text-xl text-slate-400">
        <span>{icon}</span>
      </div>
      <input type="text" name={name} id="search" placeholder={placeholder} className="w-full h-full outline-none" value={value} onChange={(e) => onChangeHandler({ key: e.target.name, value: e.target.value })} />
    </div>
  );
}

SearchBar.propTypes = {
  icon: object.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChangeHandler: func.isRequired,
  parentStyle: string,
  name: string,
};

export default SearchBar;
