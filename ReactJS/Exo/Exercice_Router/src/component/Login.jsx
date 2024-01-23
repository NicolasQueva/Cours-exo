import React from "react";
import './Login.css'
const Login = () => {
    return (
        <>
            <section id="login">
                <h2>Veuillez Entrer vos identifiant</h2>
                <label>UserName :</label>
                <input type="text" />
                <br />
                <label>PassWord :</label>
                <input type="password" />
                <button>Valider</button>
            </section>

        </>
    );
}

export default Login;