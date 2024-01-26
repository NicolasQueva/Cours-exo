import React from 'react'
import LogIn from './LogIn'

export default function ListeLog() {
    const admin = {
        Username: "Admin",
        Password: "Admin123"
    }

    const user = [{
        Username: "Nico",
        Password: "123456789"
    },
    {
        Username: "Toto",
        Password: "987654321"
    }
    ]
    return (
        <>
            <LogIn admin={admin} user={user} />
        </>
    )
}
