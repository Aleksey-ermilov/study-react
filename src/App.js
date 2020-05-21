import React, { Component }from 'react';
import {BrowserRouter} from 'react-router-dom'

import Header from "./components/header/header"

import './App.css';

import {useRoutes} from "./routes";
import {useAuth} from "./service/auth";
import {AuthContext} from "./context/authContext";


export const App = () => {

        const { token, login, logout, user } = useAuth()
        const isAuthenticated = !!token
        const routes = useRoutes(isAuthenticated)

        return (
            <AuthContext.Provider value={ {
                token, login, logout, user, isAuthenticated
            } }>
                <BrowserRouter>
                    <Header />
                    {routes}
                </BrowserRouter>
            </AuthContext.Provider>
        )

}
