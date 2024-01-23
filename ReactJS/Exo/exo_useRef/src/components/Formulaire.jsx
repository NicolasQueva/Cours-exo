import React, { useRef } from 'react'
import login from '../App'
import App from '../App'
export default function formulaire(props) {

    const userRef = useRef()
    const mdpRef = useRef()

    return (
        <>
            <label htmlFor="UserName">UserName :</label>
            <input type="text" ref={userRef} />
            <br />
            <label htmlFor="password">Mot de passe : </label>
            <input type="password" ref={mdpRef} />
            <br />
            <button onClick={() =>{props.login(userRef.current.value, mdpRef.current.value)}}> Valider</button >

        </>
    )
}
