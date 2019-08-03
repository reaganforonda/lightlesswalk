import React from 'react';

export default class SignUpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            firstName: '',
            lastName: '',
            password:'',
            confirmPW: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit(e) {
        console.log(this.state);
        this.prevenDefault(e);
        
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <h1>Sign Up</h1>
                <div>
                    <input name='email' type='email' placeholder='Email'
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <input name='userName' type='text' placeholder='User Name' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <input name='firstName' type='text' placeholder='First Name' 
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <input name='lastName' type='text' placeholder='Last Name' 
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <input name='password' type='password' placeholder='Password'
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <input name='confirmPW' type='password' placeholder='Confirm Password'
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <button onClick={(e)=>this.handleFormSubmit(e)}>Sign Up</button>
                </div>
            </form>
        )
    }
}