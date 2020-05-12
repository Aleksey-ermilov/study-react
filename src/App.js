import React from 'react';
import './App.css';

import Select from "./components/Select";
import InputBtnSave from "./components/InputBtnSave";

import arrHome from "./JsonOb";

function App() {
  return (
      <div>
        <div>
          <h1>Home</h1>
          <Select/>
        </div>

        <div>
          <h1>Edit Home</h1>
          <InputBtnSave/>
        </div>
      </div>
  );
}

export default App;
