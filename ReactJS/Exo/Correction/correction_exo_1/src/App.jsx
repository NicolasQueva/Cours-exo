import React from 'react'
import AlertComponent from './components/AlertComponent'

export default function App() {
    return (
        <>
            <h1>Exercice 1 </h1>
            <AlertComponent />
            <AlertComponent msg="Attention !"/>
            <AlertComponent backColor = "blue"/>
            <AlertComponent backColor = "green" msg="Tout est bon !"/>

        </>
    )
}
