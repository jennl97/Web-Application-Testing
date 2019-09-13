import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <div>
        <Display />
      </div>
     <div>
       <Dashboard />
     </div>
    
    </div>
  );
}

export default App;
