/***********
 * Action types
 ***********/

 import  * as cont from '../const/index';

export const addChat = chat => {
    return {
        type: cont.ADD_CHAT,
        data: chat
    }
}