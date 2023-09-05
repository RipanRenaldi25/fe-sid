import React from 'react';
import { useSelector } from 'react-redux';
import NavigationLists from './NavigationLists';

const navList = [
  {
    path: '/home',
    title: 'Home',
  },
  {
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '/faq',
    title: 'FAQ',
  },
  {
    path: '/document',
    title: 'Document',
  },
];

function NavigationBar() {
  const { auth: { isLogin } } = useSelector((states) => states);
  return (
    <nav>
      {
        isLogin ? (
          <NavigationLists navList={navList} />
        ) : (
          <NavigationLists navList={navList.slice(0, 3)} />
        )
      }
    </nav>
  );
}

export default NavigationBar;
