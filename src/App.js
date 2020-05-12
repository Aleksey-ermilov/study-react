import React from 'react';
import './App.css';

import Select from "./components/Select";
import InputSave from "./components/InputSave";
import BtnSave from "./components/BtnSave";

/*
import { jsonOb } from'./JsonOb'

let arrHome = jsonOb.map(h => ({
  name: h.homeName,
  id: h.id,
  rooms: h.rooms.map(a => ({id: a.id, roomName: a.roomName }))
  //rooms: h.rooms.map(a => JSON.stringify(({id: a.id, roomName: a.roomName })))
}));
*/

function App() {
  return (
      <div>
        <div>
          <h1>Home</h1>
          <Select/>
        </div>

        <div>
          <h1>Edit Home</h1>
          <InputSave/>
          <BtnSave/>
        </div>
      </div>
  );
}

export default App;
