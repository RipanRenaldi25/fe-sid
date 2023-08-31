import React from 'react';
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
  return (
    <nav>
      <NavigationLists navList={navList} />
    </nav>
  );
}

export default NavigationBar;
