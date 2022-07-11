import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Auth } from './../../firebase/firebase';
import firebase from 'firebase/app'

const Label = () => {
    const login = () => {
        Auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
    return (
        <>
            <div className="login-button google" onClick={login}>
                <GoogleOutlined/> Sign In with Google
            </div>
        </>
    )
}

export default Label;