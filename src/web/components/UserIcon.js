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
                <img src={ userImage } width='50px;' height='50px;' />
            </UserImg>
        )
    }
}

export default UserIcon;