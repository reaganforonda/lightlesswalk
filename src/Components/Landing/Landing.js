import React from 'react';
import {withRouter} from 'react-router-dom';

export class Landing extends React.Component{
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render(){
        return (
            <div>
                LANDING PAGE
            </div>
        )
    }
}

export default withRouter(Landing);