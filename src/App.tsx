import React, { useState } from 'react';
import './App.css';
import Dropdown from './Componeten/ui/Dropdown/Dropdown';
import Button from './Componeten/ui/Button/Button';

const App = () => {
  return (
    <div className="App">
      < div className="App-header">
        <div>
          <Dropdown> <h2>Randomtext</h2></Dropdown>
        </div>
        <Button>sadaas</Button>
      </div>
    </div>
  );
}

export default App;
