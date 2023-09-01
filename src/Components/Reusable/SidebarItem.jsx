import { bool, func, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function SidebarItem({
  icon, path, title, isActive, onClickSidebarHandler, sidebarOpen,
}) {
  return (
    <li className={`group flex items-center px-2 py-2 rounded-lg hover:bg-purple-color hover:text-primary-white w-full h-full cursor-pointer transition-colors ${isActive ? 'bg-purple-color text-white shadow-md' : 'text-gray-600'} mb-5`} onClick={() => onClickSidebarHandler(path)}>
      <span className="min-w-[40px] flex justify-center items-center text-xl">
        {icon}
      </span>
      <Link to={path} className={`${!sidebarOpen && 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:ml-8 group-hover:text-black'}`}>
        {title}
      </Link>
    </li>
  );
}

SidebarItem.propTypes = {
  icon: func.isRequired,
  path: string.isRequired,
  title: string.isRequired,
  isActive: bool.isRequired,
  onClickSidebarHandler: func.isRequired,
  sidebarOpen: bool.isRequired,
};

export default SidebarItem;
