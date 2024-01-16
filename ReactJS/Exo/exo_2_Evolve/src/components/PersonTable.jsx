import React from 'react'
import classes from './PersonTable.module.css'

export default function PersonTable(props) {

    const everybody = props.persons

    console.log(!everybody)
    if (!everybody || everybody?.length == 0 ) {
        return (
            <>
                <h2> Aucune donnée n'as été saisie</h2>
            </>
        )
    }
    else {
            return (
                <table className={classes.center}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>LastName</th>
                        </tr>
                    </thead>
                    <tbody className={classes.bodytable}>
                        {everybody.map((p, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{p.firstname}</td>
                                <td>{p.lastname}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            )
        }
    // else if (everybody != undefined &&  everybody.length == 0) {
    //     return (
    //         <>
    //             <h2>Tableau Vide</h2>
    //         </>
    //     )
    // } 

}
