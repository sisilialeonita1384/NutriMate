import React from 'react';
import LogoIcon from '../assets/icons/logo.png';
import './Sidebar.css';

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={LogoIcon} alt="NutriMate" className="logo" />
      </div>
      <div
        className={`sidebar-item ${activePage === 'Home' ? 'active' : ''}`}
        onClick={() => setActivePage('Home')}
      >
        <div className={`icon icon-home ${activePage === 'Home' ? 'active' : ''}`} />
        <span>HOME</span>
      </div>

      <div
        className={`sidebar-item ${activePage === 'Input Daily Meal' ? 'active' : ''}`}
        onClick={() => setActivePage('Input Daily Meal')}
      >
        <div className={`icon icon-meal ${activePage === 'Input Daily Meal' ? 'active' : ''}`} />
        <span>INPUT DAILY MEAL</span>
      </div>

      <div
        className={`sidebar-item ${activePage === 'See Recommendations' ? 'active' : ''}`}
        onClick={() => setActivePage('See Recommendations')}
      >
        <div className={`icon icon-recommendations ${activePage === 'See Recommendations' ? 'active' : ''}`} />
        <span>SEE RECOMMENDATIONS</span>
      </div>

      <div
        className={`sidebar-item ${activePage === 'My Journal' ? 'active' : ''}`}
        onClick={() => setActivePage('My Journal')}
      >
        <div className={`icon icon-journal ${activePage === 'My Journal' ? 'active' : ''}`} />
        <span>MY JOURNAL</span>
      </div>

      <div
        className={`sidebar-item ${activePage === 'Progress Overview' ? 'active' : ''}`}
        onClick={() => setActivePage('Progress Overview')}
      >
        <div className={`icon icon-progress ${activePage === 'Progress Overview' ? 'active' : ''}`} />
        <span>PROGRESS OVERVIEW</span>
      </div>
      
      <div className={`sidebar-item ${activePage === 'Logout' ? 'active' : ''}`}>
        <div className={`icon icon-logout ${activePage === 'Logout' ? 'active' : ''}`} />
        <span>LOGOUT</span>
      </div>
    </div>
  );
}

export default Sidebar;
