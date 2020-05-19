import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import RegPage from "./pages/regPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/home" exact> {/*exact - для полного совподения пути*/}
                <HomePage/>
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Switch>
                <Route path="/auth" exact> {/*exact - для полного совподения пути*/}
                    <AuthPage/>
                </Route>
                <Route path="/reg" exact> {/*exact - для полного совподения пути*/}
                    <RegPage/>
                </Route>

                <Redirect to="/auth" />
            </Switch>
        </Switch>
    )

}