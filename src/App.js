import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Homepage';
import InputDailyMeal from './pages/InputDailyMeal';

const App = () => {
  const [activePage, setActivePage] = useState('Home'); // Default to Home page

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'Input Daily Meal':
        return <InputDailyMeal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
