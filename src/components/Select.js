import React, { Component } from "react";

export default class Select extends Component{
    render () {
        const  {label} = this.props
        return (
            <select>
                {label}            
            </select>
        )
    }
}
