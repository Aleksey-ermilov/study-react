import {createContext} from "react"

function f() {}

export const AuthContext = createContext({
    token: null,
    user: null,
    login: f,
    logout: f,
    isAuthenticated: false
})
