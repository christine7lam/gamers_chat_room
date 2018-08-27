'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Dialogbox, ChatTextBox, ChatNameLabel, ChatSendBtn } from '../../styles';
import { addChat } from '../../actions/index';

class DialogBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chat: ""
        }
    }

    addChat = event => {
        console.log(event);
        if (event.key === 'Enter' || event.type === 'click') {
            this.props.addChat(this.state.chat);
            this.clearChat();
        }
    }

    updateChat = event => {
        this.setState({
            chat: event.target.value
        })
    }

    clearChat = () => {
        this.setState({
            chat: ""
        })
    }

    render() {
       
        return (
            <Dialogbox>
                <ChatNameLabel>UserName</ChatNameLabel>
                <ChatTextBox type="text" onChange={this.updateChat} value={this.state.chat} placeholder="Start your chat here" autoFocus maxlength="200"></ChatTextBox>
                <ChatSendBtn name="Send" onClick={this.addChat} onKeyPress={this.addChat}>Send</ChatSendBtn>
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