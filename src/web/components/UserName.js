'use strict'

import React, {Component} from 'react';

import { Username } from '../../styles';

class UserName extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Username>
                <div>First Name</div>
                <div>Last Name</div>
            </Username>
        )
    }
}

export default UserName;