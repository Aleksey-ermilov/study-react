import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import RegPage from "./pages/regPage";
import MainPage from "./pages/mainPage";
import EditUserPage from "./pages/editUserPage"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/home" exact> {/*exact - для полного совподения пути*/}
                    <HomePage/>
                </Route>
                <Route path="/editUser" exact> {/*exact - для полного совподения пути*/}
                    <EditUserPage/>
                </Route>
                <Route path="/" exact>
                    <MainPage/>
                </Route>

                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Switch>
                <Route path="/auth" exact>
                    <AuthPage/>
                </Route>
                <Route path="/reg" exact>
                    <RegPage/>
                </Route>
                <Route path="/" exact>
                    <MainPage/>
                </Route>

                <Redirect to="/auth" />
            </Switch>
        </Switch>
    )

}