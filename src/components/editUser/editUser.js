import React, { Component }from 'react';

export default class EditUser extends Component{
    render() {
        return (
            <div className={"container"}>
                <form >
                    <h1>Авторизация</h1>

                    <div>
                        <input type="text" placeholder={"email"}/>
                    </div>
                    <div>
                        <input type="text" placeholder={"password"}/>
                    </div>
                    <input type="submit" value={"авторизоваться"}/>
                </form>
            </div>
        )
    }
}