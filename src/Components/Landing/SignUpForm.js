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

        
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <input name='email' type='email' placeholder='Email'/>
                </div>
                <div>
                    <input name='userName' type='text' placeholder='User Name'/>
                </div>
                <div>
                    <input name='firstName' type='text' placeholder='First Name'/>
                </div>
                <div>
                    <input name='lastName' type='text' placeholder='Last Name'/>
                </div>
                <div>
                    <input name='password' type='password' placeholder='Last Name'/>
                </div>
                <div>
                    <input name='confirmPW' type='password' placeholder='Last Name'/>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </form>
        )
    }
}