import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuItem({
  icon, title, isActive, url, onChangeMenuList,
}) {
  return (
    <Link to={url} className={` ${isActive ? 'text-[#35ADD6] border-b-4 border-[rgba(0,0,0,.05)]' : 'text-gray-400'} bg-[#fff] flex gap-3 p-3 items-center font-semibold hover:cursor-pointer hover:bg-[rgba(0,0,0,.04)] transition-colors`} onClick={() => onChangeMenuList(url)}>
      <span className="text-3xl">
        {icon}
      </span>
      <h1 className={`${isActive ? 'text-black' : 'text-gray'}`}>
        {title}
      </h1>
    </Link>
  );
}

MenuItem.propTypes = {
  icon: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
  url: propTypes.string.isRequired,
};

export default MenuItem;
