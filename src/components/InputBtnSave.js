import React, { Component } from "react";

export default class InputBtnSave extends Component {


    text = (event) => {
        this.setState({ name: event.target.value })
    }
    
    render() {
        const { updateData, homeName } = this.props 

        return (
            <div>
            <input type="text"
                // value={ homeName.name }                
                onChange={ this.text }
            />
            <button onClick={ (event) => { updateData(this.state.name) }}>save</button>
        </div>
        )
    }
}
