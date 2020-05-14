import React, { Component } from "react";

export default class Select extends Component{    

    render () {
        const  { label, click } = this.props;
        return (
            <select
            onChange={ (event) => click(event.target.value) }
            >
                {label}            
            </select>
        )
    }
}
