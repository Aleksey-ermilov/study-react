import {useState, useCallback, useEffect} from "react"

import {LocalStor} from "./localStor"

export const useAuth = () => {
    const {getItem, removeItem, setItem} = LocalStor()

    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const login = useCallback( (jwtToken, user) => {
        setToken(jwtToken)
        setUser(user)

        setItem("user", {
            user: user, token: jwtToken
        })

    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUser(null)
        removeItem("user")
    }, [])

    useEffect( () => {
        const data = getItem("user")

        if (data && data.token) {
            login(data.token, data.user)
        }
    }, [login])

    return {login, logout, token, user}
}