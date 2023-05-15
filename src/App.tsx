import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import ComingSoon from './pages/ComingSoon';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>          
          <Route path="/" element={<ComingSoon />} />
          <Route path="/cascadia" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>


  );

}

export default App;
