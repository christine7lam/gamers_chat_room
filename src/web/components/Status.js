'use strict'

import React, {Component} from 'react';

import { StatusBox } from '../../styles';

class Status extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <StatusBox>
                Active
            </StatusBox>
        )
    }
}

export default Status;