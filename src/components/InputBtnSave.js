import React, { Component } from "react";

export default class InputBtnSave extends Component {

    /*constructor(props) {
        super(props);
        this.state = {
            selectedHome : props.selectedHome
        }
    }*/


    text = (event) => {
        let home = this.state.selectedHome;
        home.name = event.target.value;
        this.setState({ selectedHome: home })
    }
    
    render() {
        const { selectedHome } = this.props
        this.setState( {
            selectedHome
        })

        return (
            <div>
            <input type="text"
                   value={ this.state.selectedHome.name }
                   onChange={ this.text }

                   //defaultValue={ selectedHome.name}

            />
            <button
                //onClick={ (event) => { updateData(this.state.name) }}
            >save</button>
        </div>
        )
    }
}
