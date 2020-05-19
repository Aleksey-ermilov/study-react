import React, { Component } from "react";

export default class InputBtnSave extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : this.props.selectedHome.name
        }
    }

    changeHome = (e) => {
        this.setState({ name: e.target.value })
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedHome.id !== prevProps.selectedHome.id) {
            this.setState({
                name : this.props.selectedHome.name
            })
        }
    }

    render() {

        const { name } = this.state
        const { getInputValue } = this.props

        return (
            <div>
                <input type="text"
                       value={ name }
                       onChange={ this.changeHome }
                />
                <button
                    onClick={ () => getInputValue(name) }
                >save</button>
            </div>
        )
    }
}
