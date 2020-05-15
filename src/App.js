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
            id : arrHome[0].id,
            selectedHome: arrHome[0]
        }
    }

    updateData (value) {
        console.log(value);
        console.log(this.state.id);
    }

    /*homeName (id) {
        return this.state.arrHome.find( item => id === item.id )
    }*/

    onChange = async (e) => {
        const { selectedIndex } = e.target;
        await this.setState({ selectedHome: this.state.arrHome[selectedIndex]})
        console.log(this.state.selectedHome)
        console.log(selectedIndex)
    }

    chooseHome = home => () => {
        console.log(home)
    }

    render() {
        const { arrHome, selectedHome } = this.state

        return (
            <div className={"container"}>
                <div>
                    <h1>Home</h1>
                    <Select
                        // click={ (id) => { this.idSelect(id) } }
                        arrHome={ arrHome }
                        onChange={ this.onChange }
                        chooseHome={ this.chooseHome}
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
