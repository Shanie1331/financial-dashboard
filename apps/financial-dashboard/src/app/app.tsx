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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
