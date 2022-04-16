import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [login, setLogin] = useState(false)
    const [userInfo, setUserInfo] = useState({});
    const [customError, setCustomError] = useState("")

    const handleInputText = (event) => {
        userInfo[event.target.name] = event.target.value;
        console.log(event.target.name, event.target.value)

    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = event => {
        event.preventDefault()
        const email = userInfo.email;
        const password = userInfo.password;
        const confirmPassword = userInfo.confirmPassword;
        if (password !== confirmPassword) {
            if (!login) {
                setCustomError("pass not matched")
                return;
            }
        }
        else {
            setCustomError("")
        }
        if (!login) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            signInWithEmailAndPassword(email, password)
        }
    }
    return (
        <>
            <div className='w-50 mx-auto'>
                <h1>
                    Please {login ? "login" : "register"}
                </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(event) => handleInputText(event)} name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(event) => handleInputText(event)} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    {!login && <div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={(event) => handleInputText(event)} name='confirmPassword' type="ConfirmPassword" placeholder="Confirm Password" />
                        </Form.Group>
                    </div>}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setLogin(!login)} type="checkbox" label="already have an account?" />
                    </Form.Group>
                    <p className='text-danger'>{customError}</p>
                    <Button variant="primary" type="submit">
                        {login ? 'Login' : 'Register'}
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;