import React from 'react';
import { Auth } from '../../firebase/firebase';

const LogOutTab = (props) => {


    const handleLogout = () => {
        Auth.signOut();
        props.history.push('/');
    }

    return (
        <div className="logout-tab" onClick={handleLogout}>
            Logout
        </div>
    )
}

export default LogOutTab;
