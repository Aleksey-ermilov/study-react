import React, { Component } from "react";

export default class InputBtnSave extends Component {
    text (event)  {
        //this.setState({ name: event.target.value })
        //this.props.updateData(event.target.value)
        //console.log(event.target.value)
    }
    state = {
        name: 'click btn "save"'
    }

    render() {
        return (
            <div>
            <input type="text"
            onChange={this.text}
            />
            <button onClick={() => { this.props.updateData(this.state.name)}}>save</button>
        </div>
        )
    }
}
