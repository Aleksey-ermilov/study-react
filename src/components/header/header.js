import React, { Component }from 'react';
import {NavLink} from "react-router-dom"

import './header.css';

export default class Header extends Component{
    render() {

        return (
            
            <nav>                
                <ul>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth">Авторизация</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reg" >Регистрация</NavLink>
                    </li>




                    <li>
                        <NavLink to="/editUser" >Редактирвать профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" >Homes</NavLink>
                    </li>
                    <li>
                        <a href="#" >Выход</a>
                    </li>
                </ul>
            </nav>             
        )
    }
}








