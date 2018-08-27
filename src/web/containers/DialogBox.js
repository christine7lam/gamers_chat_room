'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Dialogbox, ChatTextBox, ChatNameLabel, ChatSendBtn } from '../../styles';

class DialogBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Dialogbox>
                <ChatNameLabel>UserName</ChatNameLabel>
                <ChatTextBox type="text" placeholder="Start your chat here" autofocus maxlength="200"></ChatTextBox>
                <ChatSendBtn name="Send">Send</ChatSendBtn>
            </Dialogbox>
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
export default DialogBox;