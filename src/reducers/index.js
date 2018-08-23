/***********
 * Redux reducer file.
 *
 * All your reducer logic can go in this file in appReducer.
 ***********/

//import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import * as types from "../const";

const initialState = {
    user: null,
    completedTasks: [],
    incompleteTasks: []
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        // add your app actions here
        case types.APP_LOGIN: {
            return { ...state, user: action.payload.user };
        }
        case types.LOAD_COMPLETED_TASK : {
            return { ...state, completedTasks: action.tasks };
        }
        case types.LOAD_INCOMPLETE_TASK : {
            return { ...state, incompleteTasks: action.tasks };
        }
        default:
            return state;
    }
}

// combine all reducers into one main reducer
const rootReducer = combineReducers({
    app: appReducer,
    //routing: routerReducer
});

export default rootReducer;
