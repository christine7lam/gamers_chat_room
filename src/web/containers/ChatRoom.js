'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Chatroom } from '../../styles';

class ChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Chatroom>
                just a chat room now
            </Chatroom>
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
export default ChatRoom;