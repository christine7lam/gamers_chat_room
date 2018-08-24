'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Dialogbox } from '../../styles';

class DialogBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <Dialogbox>
                You can start your chat here
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