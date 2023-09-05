import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NavigationItem from '../Reusable/NavigationItem';
import sidebarContext from '../../Context/sidebarContext';

function NavigationLists({ navList = [] }) {
  const { isHamburgerClicked, setIsHamburgerClicked } = useContext(sidebarContext);
  return (
    <ul className={`mobile:flex-col mobile:absolute mobile:left-0 mobile:right-0 mobile:top-0 mobile:px-10 mobile:bg-sidebar-color mobile:transition-all ${!isHamburgerClicked && 'mobile:-top-96'} md:top-0 md:relative flex gap-4 text-black text-lg md:flex-row md:bg-inherit`}>
      {navList.map((navItem) => (
        <li key={navItem.path}>
          <NavigationItem path={navItem.path} title={navItem.title} onClick={() => setIsHamburgerClicked(false)} />
        </li>
      ))}
    </ul>
  );
}

NavigationLists.propTypes = {
  navList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default React.memo(NavigationLists);
