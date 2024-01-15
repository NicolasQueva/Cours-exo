import React from 'react'
import classes from './Tableau.module.css'

export default function Tableau() {
    const annuaire = [
        {
            prenom: "Albert",
            nom: "Dupont",
        },
        {
            prenom: "Maria",
            nom: "Dupont",
        },
        {
            prenom: "Chloé",
            nom: "Dupont",
        },
        {
            prenom: "Sylvia",
            nom: "Martez",
        }
    ]
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {annuaire.map((annuaires, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{annuaires.prenom}</td>
                            <td>{annuaires.nom}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
