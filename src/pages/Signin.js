import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === '';
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((e) => {
                setEmailAddress('')
                setPassword('')
                setError(e.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
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
                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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
