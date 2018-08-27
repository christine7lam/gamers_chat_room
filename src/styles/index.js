'use strict'

import styled from "styled-components";

// Main container style
export const ChatRoomContainer = styled.div`
  display: table;
  flex-flow: column;
  width: 95%;
  height: 95%;
  margin: 2.5%;
  border: 1px solid #000000;
  background-color: white;
`;

// Chat Container style
export const ChatContainer = styled.div`
  float: left;
  width: 70%;
  height: 100%;
`;

// Chat room style
export const Chatroom = styled.div`
  width: 98.5%;
  height: 78%;
  border-bottom: 1px solid #000000;
  box-sizing: border-box;
  margin: 1.5% 0 1.5% 1.5%;
`;

// Dialog Box style
export const Dialogbox = styled.div`
   width: 98.5; 
   height: 17.5%;
   box-sizing: border-box;
   margin: 0 0 1.5% 1.5%;

`;

// User list style
export const Userlist = styled.div`
    float: left;
    width: 27%;
    height: 600px;
    border: 1px solid #000000;
    box-sizing: border-box;
    margin: 1.5%;
    padding: 10px;
`;

// User box 
export const Userbox = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px;
  box-sizing: border-box;
`;

// Status 
export const StatusBox = styled.div`
   float: left;
   height: 50%;
   width: 10%;
   border-radius: 50%;
   background-color: red;
   margin-right: 5px;
   margin-top: 13px;
   background-image: url('../../../public/resources/images/status.png');
   background-size: 100px;
   background-position: -22px 0;
`;

// User Img
export const UserImg = styled.div`
    float: left;
    height: 40px;
    width: 30%;  
    margin-right: 5px;
`;

// User name
export const Username = styled.div`
    float: left;
    height: 50px;
    width: 45%;
    color: #000000;
    font-size: 12px;
    font-family: arial, sans-serif;
    margin-top: 10px;
`;

// Chat Name Label
export const ChatNameLabel = styled.div`
  float: left;
  width: 15%;
  height: 30%;
  margin-right: 1%;
  margin-top: 10px;
  text-align: right;
`;

// Chat Text Box
export const ChatTextBox = styled.input`
  float: left;
  width: 70%;
  height: 30%;
  margin-right: 1%;
`;

// Chat Send Button
export const ChatSendBtn = styled.button`
  float: left;
  width: 11%;
  height: 30%;
  margin-top: 3px;
`;

