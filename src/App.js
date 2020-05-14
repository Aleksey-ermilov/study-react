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
            id : arrHome[0].id
        }
    }

    updateData (value) {
        console.log(value)    
        console.log(this.state.id)    
    }

    idSelect (id) {
        console.log(id);   
        this.setState( { id } )     
    }

    homeName (id) {
        return this.state.arrHome.find( item => id === item.id )
    }

    render() {       

        const element = this.state.arrHome.map( (home) => {
            return (
                <option
                    key={home.id}
                    value={home.id}
                >
                    {home.name}
                </option>
            )
        });

        return (
            <div className={"container"}>
                <div>
                    <h1>Home</h1>
                    <Select label={element} click={ (id) => { this.idSelect(id) } }  />
                </div>

                <div>
                    <h1>Edit Home</h1>
                    <InputBtnSave 
                        updateData={ (value) => this.updateData(value) }
                        homeName={ this.homeName(this.state.id) }
                        />
                </div>
            </div>
        )
    }

}
