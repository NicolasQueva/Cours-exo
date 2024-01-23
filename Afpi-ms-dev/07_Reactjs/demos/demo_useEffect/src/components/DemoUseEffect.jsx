import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const DemoUseEffect = () => {
    const nameRef = useRef()
    const [name, setName] = useState()

    const valider = () => {
        setName(nameRef.current.value)
    }

    // L'effet est éxecuté au lancement de l'application
    useEffect(() => {
        console.log("Lancement de l'application");
    }, [])

    //L'effet est exécuté chaque fois que name change d'état
    useEffect(() => {
        console.log(name);
    }, [name])
    
    return ( 
        <>
            <input type="text" ref={nameRef} />
            <button onClick={valider}>Valider</button>
        </>
     );
}
 
export default DemoUseEffect;