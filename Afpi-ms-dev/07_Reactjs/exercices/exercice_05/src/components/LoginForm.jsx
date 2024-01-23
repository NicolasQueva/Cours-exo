import React, { useRef } from 'react';

const LoginForm = (props) => {
    const {displayLog} = props
    const emailRef = useRef()
    const passwordRef = useRef()

    const submitForm = () => {
        const email = emailRef.current.value
        const password = passwordRef.current.value

        displayLog({email, password})
        emailRef.current.value = ""
        passwordRef.current.value = ""
    }

    return ( 
        <>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="email">Password:</label>
                <input type="password" ref={passwordRef} />
            </div>
            <button onClick={submitForm}>Valider</button>
        </>
     );
}
 
export default LoginForm;