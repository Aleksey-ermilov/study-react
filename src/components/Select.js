import React, { Component } from "react";

export default class Select extends Component{    

    render () {

        const  { arrHome, onChange, chooseHome } = this.props;

        const element = arrHome.map( (home) => {
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
            <select
                onChange={(e) => { onChange(e) } }
            >
                {element}
            </select>
        )
    }
}
