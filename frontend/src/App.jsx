import React from 'react';
import './App.css';
import SimilarProducts from './components/SimilarProducts';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <h1>Recommendation Widget</h1>
      <SimilarProducts />
      <ControlPanel />
    </div>
  );
}

export default App;
