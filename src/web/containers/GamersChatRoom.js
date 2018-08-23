'use strict'

import React, {Component, PropTypes} from 'react';
import styled from "styled-components";
import {connect} from 'react-redux';

import Application from '../components/Application';

const ChatRoomContainer = styled.div`
  display: flex;
  width: 95%;
  height: 95%;
  margin: 2.5%;
  border: 1px solid #000000;
  background-color: white;
`;

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