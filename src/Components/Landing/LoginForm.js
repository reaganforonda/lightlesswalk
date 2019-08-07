import React from 'react';
import axios from 'axios';

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    };

    handleFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <div>
                    <input name='email' type='email' placeholder='Email' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <input name='password' type='password' placeholder='Password' 
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <button onClick={(e)=>this.handleFormSubmit(e)}>Log In</button>
                </div>
            </form>
        )
    }
}