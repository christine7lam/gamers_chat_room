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

// Chat room style
export const Chatroom = styled.div`
  float: left;
  width: 66%;
  height: 500px;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-top: 1.5%;
  margin-left: 2.5%;
`;

// User list style
export const Userlist = styled.div`
    float: left;
    width: 27%;
    height: 600px;
    border: 1px solid #000000;
    box-sizing: border-box;
    margin: 1.5%;
`;

// Dialog Box style
export const Dialogbox = styled.div`

`;