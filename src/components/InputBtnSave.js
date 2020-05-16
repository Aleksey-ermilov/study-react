import React, { Component } from "react";

export default class InputBtnSave extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : props.selectedHome.name
        }
    }

    changeHome = (e) => {  
        console.log(e.target.value);
           
        this.setState({ name: e.target.value })
    }
    
    render() {

        const { name } = this.state
        
        return (
            <div>
            <input type="text"
                   value={ name }
                   onChange={ this.changeHome }
            />
            <button>save</button>
        </div>
        )
    }
}
