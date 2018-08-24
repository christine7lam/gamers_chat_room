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
                <label>UserName</label>
                <input type="text"></input>
                <button name="Send" />
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