/***********
 * Redux reducers
 ***********/

import { combineReducers } from "redux";
import * as types from "../const";

const initialState = {
    chatlist: []
};

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_CHAT: {
            let newState = {...state};
            newState.chatlist.push(action.data.chat);
            return newState;
        }
        default:
            return state;
    }
}

// bundle reducers together
const rootReducer = combineReducers({
    app: chatReducer,
});

export default rootReducer;
