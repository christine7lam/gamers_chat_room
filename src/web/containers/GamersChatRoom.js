'use strict'

import React, {Component, PropTypes} from 'react';
import { ChatRoomContainer, ChatContainer } from '../../styles'
import {connect} from 'react-redux';

import ChatRoom from './ChatRoom';
import UsersList from './UsersList';
import DialogBox from './DialogBox';

class GamersChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChatRoomContainer>
                <ChatContainer>
                    <ChatRoom />
                    <DialogBox />
                </ChatContainer>
                <UsersList />
            </ChatRoomContainer>
        );
    }
}

GamersChatRoom.propTypes = {

};

//const select = state => state;

// Wrap the component to inject dispatch and state into it
//export default connect(select)(GamersChatRoom);
export default GamersChatRoom;

