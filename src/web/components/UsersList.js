'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UsersList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div className="store-body">
                UserList here
            </div>
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