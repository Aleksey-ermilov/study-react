import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom"

import './header.css';
import {AuthContext} from "../../context/authContext";

const Header = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logout = event => {
        event.preventDefault()
        auth.logout()
        history.push("/")
    }

    if (auth.isAuthenticated){
        return(
            <nav>                
                <ul>
                    <li>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/editUser" >Редактирвать профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" >Homes</NavLink>
                    </li>
                    <li>
                        <a href="/" onClick={logout} >Выход</a>
                    </li>
                </ul>
            </nav> 
        )
    } else {
        return(
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
                </ul>
            </nav>
        )
    }

}

export default Header







