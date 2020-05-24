import React, { Component }from 'react';


import Select from "./select";
import InputBtnSave from "./inputBtnSave";

import arrHome from "./JsonOb";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            arrHome,
            selectedHome: arrHome[0]
        }
    }

    onChange = (e) => {
        const { selectedIndex } = e.target;

        let home = this.state.arrHome[selectedIndex]
        this.setState({ selectedHome: home})
    }

    getInputValue = (value) => {
        const { arrHome, selectedHome } = this.state

        let newArrHome = arrHome.map((item) => {
            if (item.id === selectedHome.id) {
                item.name = value
                return item
            }
            return item
        })

        this.setState({
            arrHome : newArrHome
        })
    }

    render() {
        const { arrHome, selectedHome } = this.state

        return (
            <div className={"container"}>
                <div>
                    <h1>Home</h1>
                    <Select
                        arrHome={ arrHome }
                        onChange={ this.onChange }
                    />
                </div>

                <div>
                    <h1>Edit Home</h1>
                    <InputBtnSave
                        selectedHome={ selectedHome }
                        getInputValue={ this.getInputValue }
                    />
                </div>
            </div>
        )
    }

}
