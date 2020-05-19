import React, { Component }from 'react';
import './header.css';

export default class Header extends Component{
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href={"#"}>Главная</a>
                    </li>
                    <li>
                        <a href={"#"} >Авторизация</a>
                    </li>
                    <li>
                        <a href={"#"} >Регистрация</a>
                    </li>
                    <li>
                        <a href={"#"} >Редактирвать профиль</a>
                    </li>
                    <li>
                        <a href={"#"} >Homes</a>
                    </li>
                    <li>
                        <a href={"#"} >Выход</a>
                    </li>
                </ul>
            </nav>
        )
    }
}








