import React, { Component }from 'react';
import './App.css';

import Select from "./components/Select";
import InputBtnSave from "./components/InputBtnSave";

import arrHome from "./JsonOb";

const element = arrHome.map( (home) => {

    return (
        <option
            key={home.id}
            value={home.id}
        >
            {home.name}
        </option>
    )
});

export default class App extends Component{

    updateData = (value) => {
        console.log(value)
        //this.setState({ name: value })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Home</h1>
                    <Select label={element}/>
                </div>

                <div>
                    <h1>Edit Home</h1>
                    <InputBtnSave updateData={this.updateData}/>
                </div>
            </div>
        )
    }

}
