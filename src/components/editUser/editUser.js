import React, { useState, useEffect }from 'react';

import {config} from "../../config/config"
import {useHttp} from "../../service/http"

const EditUser = () => {
    let storUser = JSON.parse(localStorage.getItem("user"))
    let { user } = storUser
    
    const { loading, error, request, clearError } = useHttp()
        const [form, setForm] = useState({                
            email: user.email, 
            password: "", 
            repeatPassword:"", 
            surname:user.surname || "",
            name:user.name || "", 
            age:user.age || "",
             _id: user._id
        })

        const changeForm = event => {
            setForm({ ...form, [event.target.name]: event.target.value })
        }

        useEffect(() => {
            console.log(error)
            clearError()
        }, [error, clearError])

        const requestServer = async (event) => {
            try {
                event.preventDefault();
                console.log("form", form);
                console.log("user", user);                
                
                const data = await request(`${config.server}/user/editUser`, "POST", {...form})
                storUser.user = data.user
                localStorage.setItem("user", JSON.stringify({
                    user: storUser.user, token: storUser.token
                }))
                console.log("Data", data)
            }catch (e) {}
        }

        return (
            <div className={"container"}>
            <form onSubmit={requestServer} >
                <h1>Редактирование</h1>

                <div>
                    <input type="email" placeholder={"email"} value={form.email} name="email" onChange={changeForm} />
                </div>
                <div>
                    <input type="password" placeholder={"пароль"} name="password" onChange={changeForm} />
                </div>
                <div>
                    <input type="password" placeholder={"Повторить пароль"} name="repeatPassword" onChange={changeForm} />
                </div>
                <div>
                    <input type="text" placeholder={"Фамилия"} value={form.surname} name="surname" onChange={changeForm} />
                </div>
                <div>
                    <input type="text" placeholder={"Имя"} value={form.name} name="name" onChange={changeForm} />
                </div>
                <div>
                    <input type="number" placeholder={"Возраст"} value={form.age} name="age" onChange={changeForm} />
                </div>

                <input type="submit" value={"Сохранить"} disabled={loading} />
            </form>
        </div>
        )
    
}

export default EditUser;