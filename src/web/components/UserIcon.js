'use strict'

import React, {Component} from 'react';

import { UserImg } from '../../styles';
import userImage from '../../../public/resources/images/user.png';

class UserIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <UserImg>
                <img src={ userImage } width='100%' height='100%' />
            </UserImg>
        )
    }
}

export default UserIcon;