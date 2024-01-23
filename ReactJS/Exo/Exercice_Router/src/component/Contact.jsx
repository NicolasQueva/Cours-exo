import React from "react";
const Contact  = () => {
    return ( 
        <>
        <form action="#">
            <label>Prenom : </label>
            <input type="text" />
            <label> Nom : </label>
            <input type="text" />
            <br />
            <label>Email : </label>
            <input type="email" name="" id="" />
            <label> Télephone : </label>
            <input type="tel" />
            <br />
            <button>Valider</button>
        </form>
        </>
     );

}
 
export default Contact ;