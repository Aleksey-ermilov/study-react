import React from 'react';
import './App.css';

import Select from "./components/Select";
import InputSave from "./components/InputSave";
import BtnSave from "./components/BtnSave";

import arrHome from "./JsonOb";

function App() {
  return (
      <div>
        <div>
          <h1>Home</h1>
          <Select/>
        </div>

        <div>
            <p>{arrHome[0].name}</p>
          <h1>Edit Home</h1>
          <InputSave/>
          <BtnSave/>
        </div>
      </div>
  );
}

export default App;
