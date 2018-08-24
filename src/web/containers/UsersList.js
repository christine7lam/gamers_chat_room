'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Userlist, Userbox} from '../../styles';
import UserIcon from '../components/UserIcon';
import Status from '../components/Status';
import UserName from '../components/UserName';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Userlist>
                <Userbox>
                    <Status />
                    <UserIcon />
                    <UserName />
                </Userbox>
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