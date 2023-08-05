import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import Input from './common/input.component';
import Label from './common/Label.component';
import Button from './common/button.componenet';

class Login extends Component {
    state = { 
        email: "",
        password: "",
        loggedIn: false,
        error:""
    }

    handleChangeEmail = (e) => {
        const email = e.target.value;
        this.setState({ email });
    }

    handleChangePassword = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }

    handleLogin = (e) => {
        e.preventDefault();
        if(this.state.email === "saddam@gmail.com" && this.state.password === "147852"){
            this.setState({ ...this.state, loggedIn: true  });
        }else{
            this.setState({ ...this.state, error: "Invalid credentials"  });
        }

    }

    render() { 
        const { email, password, loggedIn, error } = this.state;
        return (
            <>
                {
                    loggedIn && <Navigate to='/counters' replace={true} />
                }
                <form className='container mt-5'>
                    <div className="mb-3">
                        <Label 
                            labelFor="email"
                            label="Email"
                        />
                        <Input
                            event={this.handleChangeEmail} 
                            value={email} 
                            type="email"
                            id="email"
                        />
                    </div>
                    <div className="mb-3">
                        <Label 
                            labelFor="password"
                            label="Password"
                        />
                                                
                        <Input
                            event={this.handleChangePassword} 
                            value={password} 
                            type="password"
                            id="password"
                        />
                    </div>

                    {
                        error && <span className='text-danger'>{error}</span>
                    }
                    <br />
                    <br />
                    <Button 
                        event={this.handleLogin}
                        className="btn btn-primary"
                        text="Login"
                    />
                </form>
            </>
        );
    }
}
 
export default Login;