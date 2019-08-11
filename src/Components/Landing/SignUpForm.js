import React from 'react';
import axios from 'axios';

export default class SignUpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password:'',
            confirmPW: '',
            displayPWError: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        if(this.state.password === this.state.confirmPW) {
            let user = Object.assign({}, this.state);
            
            axios.post('/api/auth/register', user).then(()=> {
                axios.post('/api/auth/login', user).then(()=> {
                    // TODO:
                }).catch((err) => {
                    console.log(err.response)
                })
            }).catch((err) => {
                console.log(err.response);
            })
        } else {
            this.setState({displayPWError: true});
        }
    }

    resetForm() {
        this.setState({
            email: '',
            firstName: '',
            lastName: '',
            password:'',
            confirmPW: '',
            displayPWError: false
        })
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
                        {
                            !this.state.displayPWError ? null : <p>Password Does Not Match</p>
                        }
                </div>
                <div>
                    <button onClick={(e)=>this.handleFormSubmit(e)}>Sign Up</button>
                </div>
            </form>
        )
    }
}