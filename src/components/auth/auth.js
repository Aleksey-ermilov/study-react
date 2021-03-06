import React, {useContext, useEffect, useState} from 'react';
import './auth.css';
import {useHttp} from "../../service/http";
import {AuthContext} from "../../context/authContext";
import {config} from "../../config/config"

export const Auth = () => {
    const auth = useContext(AuthContext)
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: "", password: ""
    })

    useEffect(() => {
        console.log(error)
        clearError()
    }, [error, clearError])

    const changeForm = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const requestServer = async (event) => {
        try {
            event.preventDefault();
            const data = await request(`${config.server}/user/authorization`, "POST", {...form})
            auth.login(data.token, data.user)
            console.log("Data", data)
        }catch (e) {}
    }

    return (
        <div className={"container"}>
            <form onSubmit={requestServer}>
                <h1>Авторизация</h1>

                <div>
                    <input type="email" placeholder={"email"} name="email" onChange={changeForm}/>
                </div>
                <div>
                    <input type="password" placeholder={"password"} name="password" onChange={changeForm}/>
                </div>

                <input type="submit" value={"авторизоваться"} disabled={loading}/>
            </form>
        </div>
    )

}