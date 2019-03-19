import React, { PureComponent } from 'react';
import LoginView from '../view/LoginView';

class LoginViewController extends PureComponent {

    render() {
        const { loginViewModel } = this.props;
        return (
            <LoginView {...loginViewModel} />
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
}

export default LoginViewController;