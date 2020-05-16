import React, { Component }from 'react';
import './App.css';

import Select from "./components/Select";
import InputBtnSave from "./components/InputBtnSave";

import arrHome from "./JsonOb";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            arrHome,
            selectedHome: arrHome[1]
        }
    }

    onChange = (e) => {
        const { selectedIndex } = e.target;
        console.log(selectedIndex);
        
        let home = this.state.arrHome[selectedIndex]
        this.setState({ selectedHome: home})        
    }

    render() {
        const { arrHome, selectedHome } = this.state

        return (
            <div className={"container"}>
                <div>
                    <h1>Home</h1>
                    <Select                       
                        arrHome={ arrHome }
                        onChange={ this.onChange }                        
                    />
                </div>

                <div>
                    <h1>Edit Home</h1>
                    <InputBtnSave
                        selectedHome={ selectedHome }
                        />
                </div>
            </div>
        )
    }

}
