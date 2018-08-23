'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { UL } from '../../styles';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <UL>
                UserList here
            </UL>
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