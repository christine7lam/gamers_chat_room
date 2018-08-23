'use strict'

import React, {Component, PropTypes} from 'react';
import { ChatRoomContainer } from '../../styles'
import {connect} from 'react-redux';

import Application from '../components/Application';

class GamersChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ChatRoomContainer>
                <Application />
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

