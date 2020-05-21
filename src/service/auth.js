import {useState, useCallback, useEffect} from "react"

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const login = useCallback( (jwtToken, user) => {
        setToken(jwtToken)
        setUser(user)

        localStorage.setItem("user", JSON.stringify({
            user: user, token: jwtToken
        }))
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem("user")
    }, [])

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem("user"))

        if (data && data.token) {
            login(data.token, data.user)
        }
    }, [login])

    return {login, logout, token, user}
}