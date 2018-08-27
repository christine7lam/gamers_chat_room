'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import { Chatroom, ChatDisplayUserName, ChatDisplayMessage, ChatDisplayWrapper} from '../../styles';

class ChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Chatroom>
                {
                    _.map(this.props.app.chatlist, (item, index) => {
                        return (
                            <ChatDisplayWrapper key={index}>
                                <ChatDisplayUserName>John Doe</ChatDisplayUserName>
                                <ChatDisplayMessage>{item}</ChatDisplayMessage>
                            </ChatDisplayWrapper>
                        )
                    })  
                }
            </Chatroom>
        )
    }
}

const mapStateToProps = store => {
    return store;
};

export default connect(mapStateToProps)(ChatRoom);