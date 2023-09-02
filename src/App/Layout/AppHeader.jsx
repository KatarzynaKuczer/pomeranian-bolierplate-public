import React from 'react';

import './styles/header.css';
import { Link } from 'react-router-dom';

// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';

import { MenuHeader } from '../Components/MenuHeader/MenuHeader';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      {/* 1. sposób */}
      <Link to="/">
        <Logo />
      </Link>
      <MenuHeader />

      {/* 1. sposób */}
      {/* <img src={logo} /> */}
      {/* <div className="header-title"></div> */}
    </header>
  );
}
