import React from 'react';
import propTypes from 'prop-types';
import NavigationItem from '../Reusable/NavigationItem';

function NavigationLists({ navList = [] }) {
  return (
    <ul className="flex gap-4 text-black text-lg">
      {navList.map((navItem) => (
        <li key={navItem.path}>
          <NavigationItem path={navItem.path} title={navItem.title} />
        </li>
      ))}
    </ul>
  );
}

NavigationLists.propTypes = {
  navList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default React.memo(NavigationLists);
