// imr
import React from 'react';

// sfc
const ContactMePage = () => {
    return ( 
        <>
            <form action="">
                <div>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="prenom">Prenom</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="nom">Message</label>
                    <textarea />
                </div>
                <button>Valider</button>
            </form>
        </>
     );
}
 
export default ContactMePage;