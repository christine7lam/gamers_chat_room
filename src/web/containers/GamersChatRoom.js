'use strict'

import React, {Component, PropTypes} from 'react';
import { ChatRoomContainer } from '../../styles'
import {connect} from 'react-redux';

import ChatRoom from '../components/ChatRoom';
import UsersList from '../components/UsersList';

class GamersChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChatRoomContainer>
                <ChatRoom />
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

