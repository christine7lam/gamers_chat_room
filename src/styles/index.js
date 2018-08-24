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

// Status 
export const StatusBox = styled.div`
   float: left;
   height: 20px;
   width: 20px;
   border-radius: 50%;
   background-color: red;
`;

// User Img
export const UserImg = styled.div`
    float: left;
    height: 50px;
    width: 50px;  
`;

