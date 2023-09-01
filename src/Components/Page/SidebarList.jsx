import {
  arrayOf, bool, func, object,
} from 'prop-types';
import React from 'react';
import SidebarItem from '../Reusable/SidebarItem';

function SidebarList({ navList, onClickSidebarHandler, sidebarOpen }) {
  return (
    <>
      {navList.map((nav) => (
        <SidebarItem
          icon={nav.icon}
          path={nav.path}
          title={nav.title}
          key={nav.path}
          isActive={nav.isActive}
          onClickSidebarHandler={onClickSidebarHandler}
          sidebarOpen={sidebarOpen}
        />
      ))}
    </>
  );
}

SidebarList.propTypes = {
  navList: arrayOf(object).isRequired,
  onClickSidebarHandler: func.isRequired,
  sidebarOpen: bool.isRequired,
};

export default SidebarList;
