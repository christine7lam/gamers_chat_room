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
                <div>John</div>
                <div>Doe</div>
            </Username>
        )
    }
}

export default UserName;