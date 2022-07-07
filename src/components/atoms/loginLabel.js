import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const Label = () => {
    return (
        <>
            <div className="login-button google">
                <GoogleOutlined/> Sign In with Google
            </div>
            <br/> <br/>
            <div className="login-button facebook">
                <FacebookOutlined/> Sign In with Facebook
            </div>  
        </>
    )
}

export default Label;