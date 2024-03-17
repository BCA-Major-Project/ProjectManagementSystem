import React from "react";
import * as Components from './Components'; // Import styled components

const ForgotPasswordPage = () => {
    return (
        <Components.Container>
            <Components.Form>
                <Components.Title>Forgot Your Password?</Components.Title>
                <Components.Input type='email' placeholder='Email' />
                <Components.Button>Reset Password</Components.Button>
            </Components.Form>
        </Components.Container>
    );
};

export default ForgotPasswordPage;
