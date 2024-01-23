import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MysteryNumber = (props) => {
    const { mysteryNumber } = props
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    const [isWon, setIsWon] = useState(false)

    const numberAchange = (event) => {
        setNumberA(+event.target.value)
    }

    const numberBchange = (event) => {
        setNumberB(+event.target.value)
    }

    useEffect(() => {
        setIsWon(numberA * numberB === mysteryNumber)
        console.log(isWon);
    }, [numberA, numberB, mysteryNumber])

    return (  
        <>
            <input type="number" value={numberA} onInput={numberAchange} />
            X
            <input type="number" value={numberB} onInput={numberBchange} />
            <span>{isWon ? `La multiplication des deux nombres fait bien ${mysteryNumber}`: `La multiplication des deux nombres ne fait pas ${mysteryNumber}`}</span>
        </>
    );
}
 
export default MysteryNumber;