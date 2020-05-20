import React, { useEffect, useState } from 'react';
import './reg.css';
import {useHttp} from "../../service/http";

export const Reg = () => {

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
            const data = await request("http://localhost:3001/user/registration", "POST", {...form})
            console.log("Data", data)
        }catch (e) {}
    }

    return (
        <div className={"container"}>
            <form onSubmit={requestServer}>
                <h1>Регистрация</h1>

                <div>
                    <input type="email" placeholder={"email"} name="email" onChange={changeForm}/>
                </div>
                <div>
                    <input type="password" placeholder={"password"} name="password" onChange={changeForm}/>
                </div>
                <input type="submit" value={"Зарегистрироваться"} disabled={loading}/>
            </form>
        </div>
    )

}