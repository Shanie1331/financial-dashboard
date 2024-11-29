import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { Header, Sidebar } from '@financial-dashboard/shared-ui';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}

          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header isTitleVisible={false} title="Overview" />

            {/* Page Content */}
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
