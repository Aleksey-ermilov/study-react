import React, { Component }from 'react';
import {BrowserRouter} from 'react-router-dom'

import Header from "./components/header/header"

import './App.css';

import {useRoutes} from "./routes";


export default class App extends Component{
    render() {

        const routes = useRoutes(false)

        return (
                <BrowserRouter>
                    <Header />
                    {routes}
                </BrowserRouter>
        )
    }
}
