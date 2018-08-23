'use strict'

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Application from '../components/Application';

class GamersChatRoom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="store">
                <Application />
            </div>
        );
    }
}

GamersChatRoom.propTypes = {

};

//const select = state => state;

// Wrap the component to inject dispatch and state into it
//export default connect(select)(GamersChatRoom);
export default GamersChatRoom;