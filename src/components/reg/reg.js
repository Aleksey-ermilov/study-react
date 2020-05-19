import React, { Component }from 'react';
import './reg.css';

export default class Reg extends Component{
    render() {
        return (
            <div className={"container"}>
                <form >
                    <h1>Регистрация</h1>

                    <div>
                        <input type="text" placeholder={"email"}/>
                    </div>
                    <div>
                        <input type="text" placeholder={"password"}/>
                    </div>
                    <input type="submit" value={"Зарегистрироваться"}/>
                </form>
            </div>
        )
    }
}