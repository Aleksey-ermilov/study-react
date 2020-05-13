import React, { Component } from "react";

export default class Select extends Component{
    sel (event){
        console.log(event.target.value)
    }

    render () {
        const  {label} = this.props;
        return (
            <select
            onChange={this.sel}
            >
                {label}            
            </select>
        )
    }
}
