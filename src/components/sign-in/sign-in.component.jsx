import './sign-in.styles.scss';
import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';


class Signin extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: "",
            password: ""
        })

    }

    handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })


    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>


                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} label="Email" required />
                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} label="Password" required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default Signin;