'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Dialogbox, ChatTextBox, ChatNameLabel, ChatSendBtn } from '../../styles';
import { addChat } from '../../actions/index';

class DialogBox extends Component {

    constructor(props) {
        super(props);
    }

    addChat = chat => {
        this.props.addChat();
      }

    render() {
       
        return (
            <Dialogbox>
                <ChatNameLabel>UserName</ChatNameLabel>
                <ChatTextBox type="text" placeholder="Start your chat here testing" autoFocus maxlength="200"></ChatTextBox>
                <ChatSendBtn name="Send" onClick={this.addChat}>Send</ChatSendBtn>
            </Dialogbox>
        )
    }
}

const mapStateToProps = store => {
    return {
        chatlist: store.app.chatlist
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addChat: bindActionCreators(addChat, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
//export default DialogBox;