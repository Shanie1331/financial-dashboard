// import NxWelcome from './nx-welcome';

// export function App() {
//   return (
//     <div>
//       <div className="text-blue-900 text-">Hello, Tailwind!</div>
//       <NxWelcome title="financial-dashboard" />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import { Header, Sidebar } from '@financial-dashboard/shared-ui';

const App = () => {
  return (
    <UserProvider>
      <div>
      <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="grid grid-cols-[15%,85%] w-screen h-screen">
        <div>
          <Sidebar/>
          </div>
        <div><Header isTitleVisible={false} title={'Overview'}/>
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
        </div>
    </div>
    
     
      </div>
    </div>
    </UserProvider>
  );
};

export default App;


