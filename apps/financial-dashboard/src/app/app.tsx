import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { Header, Sidebar } from '@financial-dashboard/shared-ui';

const App = () => {
  const [title, setTitle] = useState('');

  return (
    <UserProvider>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header isTitleVisible={false} title={title} />
            {/* <div className="flex-1 overflow-y-auto"> */}
              <Routes>
                <Route path="/" element={<Dashboard setTitle={setTitle} />} />
                <Route
                  path="/settings"
                  element={<Settings setTitle={setTitle} />}
                />
              </Routes>
            </div>
          {/* </div> */}
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
