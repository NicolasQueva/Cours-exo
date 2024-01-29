import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'

export default function LogIn(props) {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    let btnlog




    function log() {
        if (username == props.admin.Username && password == props.admin.Password) {
            window.localStorage.setItem("ALog", "true")
            window.localStorage.setItem("Log", "true")
            window.localStorage.setItem("Admin", props.admin.Username)
            window.localStorage.setItem("AdminP", props.admin.Password)
            navigate("/")
            window.location.reload()
        } else {
            for (let i = 0; i < props.user.length; i++) {
                if (username == props.user[i].Username && password == props.user[i].Password) {
                    window.localStorage.setItem("Log", "true")
                    navigate("/")
                    window.location.reload()
                    break;
                } else if (username == localStorage.getItem("Pseudo") && password == localStorage.getItem("Password")){
                    window.localStorage.setItem("Log", "true")
                    navigate("/")
                    window.location.reload()
                }
            }
        }


        if (username === "" || username === undefined) {
            alert("Veuillez entrer un pseudo !")
        } else if (password === "" || password === undefined) {
            alert("Veuillez entrer un mot de passe !")
        } else if ((username === "" || username === undefined) && (password === "" || password === undefined)) {
            alert("Veuillez enter un pseudo et un mot de passe ! ")
        }
    }

    function newAccount() {
        if (username != "Admin" || password != "Admin123") {
            window.localStorage.setItem("Pseudo", username)
            window.localStorage.setItem("Password", password)
        } else {
            alert("Veuillez rentrer un identifiant ou un mot de passe valide !!!")
        }
    }

    function logOut() {
        navigate("/")
        window.localStorage.clear()
        window.localStorage.setItem("Log", "false")
        window.location.reload()
    }


    render()
    function render() {

        if (localStorage.getItem("Log") == "true") {
            btnlog = <button onClick={() => logOut()} className="btn" >Deconnection</button>
        } else {
            btnlog = <button onClick={() => log()} className="btn">Connection</button>
        }


    }
    return (
        <>
            <section id="log">
                <label htmlFor="Pseudo" className='labelog'>Username :</label>
                <input type='text' onInput={(e) => setusername(e.target.value)} required className='inputlog' />
                <label htmlFor="mdp" className='labelog'>Mot de Passe :</label>
                <input type='password' onInput={(e) => setpassword(e.target.value)} required className='inputlog' />
                <div className="button"></div>
                {btnlog}
                <button onClick={() => newAccount()} className='btn'>Nouveau compte</button>
            </section>

        </>
    )
}
