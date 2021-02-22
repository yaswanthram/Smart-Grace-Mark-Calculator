import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Students',
    path: '/',
    icon: <PeopleIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Faculty',
    path: '/',
    icon: <PeopleOutlineIcon />,
    cName: 'nav-text',
  },
  {
    title: 'Grades',
    path: '/',
    icon: <MenuBookIcon />,
    cName: 'nav-text',
  },
];
