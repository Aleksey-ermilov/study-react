import React, { Component }from 'react';

export default class EditUser extends Component{
    render() {
        return (
            <div className={"container"}>
            <form >
                <h1>Редактирование</h1>

                <div>
                    <input type="email" placeholder={"email"} name="email" />
                </div>
                <div>
                    <input type="password" placeholder={"пароль"} name="password" />
                </div>
                <div>
                    <input type="password" placeholder={"Повторить пароль"} name="repeatPassword" />
                </div>
                <div>
                    <input type="text" placeholder={"Фамилия"} name="lastName" />
                </div>
                <div>
                    <input type="text" placeholder={"Имя"} name="firstName" />
                </div>
                <div>
                    <input type="text" placeholder={"Возраст"} name="age" />
                </div>

                <input type="submit" value={"Сохранить"} />
            </form>
        </div>
        )
    }
}