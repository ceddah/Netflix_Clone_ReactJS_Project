import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';

export default function Signup() {
    const [emailAddress, setEmailAddress] = useState('')
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory();

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const { firebase } = useContext(FirebaseContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    }).then(() => {
                        history.push(ROUTES.BROWSE)
                    })
            }).catch((e) => {
                setEmailAddress('')
                setPassword('')
                setFirstName('')
                setError(e.message)
            })

    }

    return (
        <>
            <HeaderContainer>
            <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value) }
                        />
                        <Form.Input 
                            placeholder="Email Address" 
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value) }
                        />
                        <Form.Input 
                            placeholder="Password" 
                            value={password}
                            type="password"
                            autoComplete="off"
                            onChange={({target}) => setPassword(target.value) }
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure your not a bot. Learn More
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
