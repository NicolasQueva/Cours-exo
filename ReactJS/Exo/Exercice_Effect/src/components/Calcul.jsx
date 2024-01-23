import React, { useEffect, useState } from "react";


const Calcul = (props) => {

    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const resultm = num1 * num2
    const result = props.number
    useEffect(() => {
        if (num1 != undefined && num2 != undefined && num1 != "" && num2 != "") {
            if (result != resultm) {
                console.log(`Les deux nombres multiplié ne font pas ${result}`);
            } else {

                console.log(`La multiplication des deux nombre fait bien ${result}`);
            }
        }

    }, [resultm])
    return (
        <>
            <label htmlFor="number1"> Nombre 1 :</label>
            <input type="number" value={num1} onInput={(e) => setNum1(e.target.value)} />
            <br />
            <label htmlFor="number1"> Nombre 2 :</label>
            <input type="number" value={num2} onInput={(e) => setNum2(e.target.value)} />
        </>
    );
}

export default Calcul;