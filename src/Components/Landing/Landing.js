import React from 'react';
import {withRouter} from 'react-router-dom';
import LoginForm from './LoginForm';

export class Landing extends React.Component{
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render(){
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }
}

export default withRouter(Landing);