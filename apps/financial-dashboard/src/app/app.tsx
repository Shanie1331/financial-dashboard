import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { Header, Sidebar } from '@financial-dashboard/shared-ui';
import useIsMobile from '../hooks/useIsMobile';

const App = () => {
  const [title, setTitle] = useState('');
  const isMobileView = useIsMobile()
  return (
    <UserProvider>
      <Router>
        <div className="flex">
          {!isMobileView && <div className='hidden lg:block sm:hidden'>
          <Sidebar isMobileView={isMobileView}/>
          </div>}
          <div className="flex-1 flex flex-col">
            <Header isMobileView={isMobileView} isTitleVisible={false} title={title} />
              <Routes>
                <Route path="/" element={<Dashboard setTitle={setTitle} />} />
                <Route
                  path="/settings"
                  element={<Settings setTitle={setTitle} />}
                />
              </Routes>
            </div>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
