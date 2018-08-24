'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Userlist } from '../../styles';
import UserIcon from "../components/UserIcon";
import Status from '../components/Status';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Userlist>
                <Status />
                <UserIcon />
            </Userlist>
        )
    }
}

// const mapStateToProps = store => {
//     return store;
// };

// const mapDispatchToProps = dispatch => {
//     return dispatch;
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default UsersList;