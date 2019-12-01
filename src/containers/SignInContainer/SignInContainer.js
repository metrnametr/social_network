import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.scss';

const SignInContainer = (props) => {
    return (
        <div className="sign-in-container">
            <div className="sign-in_inputs">
                <Input placeholder="Login" label="Login" />
                <Input typeInput="password" label="Password" />
            </div>
            <div className="sign-in_buttons">
                <Button type="primary">Sign In</Button>
                <Button type="">Sign Up</Button>
            </div>
        </div>
    )
}

export default SignInContainer;