/***********
 * Action types
 ***********/

 import types from '../const/index';

export const addChat = chat => ({
  type: types.addChat,
  chat
});