import React from 'react';


export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ""
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    };

    handleFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <div>
                    <input name='email' type='email' placeholder='Email' 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <input name='password' type='password' placeholder='Password' 
                        onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        )
    }
}