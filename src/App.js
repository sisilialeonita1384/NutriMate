import React from 'react';
import Sidebar from './components/Sidebar.js';

const App = () => {
  const [activePage, setActivePage] = React.useState(null);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <div>Home Page</div>;
      case 'Input Daily Meal':
        return <div>Input Daily Meal Page</div>;
      // Tambahkan halaman lain sesuai kebutuhan
      default:
        return <div>Pilih halaman dari Sidebar</div>;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
