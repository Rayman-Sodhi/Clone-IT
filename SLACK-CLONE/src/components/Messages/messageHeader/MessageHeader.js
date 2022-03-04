import React from "react";
import { Segment, Header, Input, Icon } from "semantic-ui-react";

const MessageHeader = (props) => {
  return (
    <Segment clearing style={{backgroundColor:"rgba(209,210,211,.5)"}}>
      <Header floated="left" fluid="true" as="h2" >
        <span>
          {(props.isPrivateChat ? "@" : "#")+ props.channelName}
          {!props.isPrivateChat &&  <Icon 
          onClick={props.starChange}
          name={props.starred ? "star" : "star outline"}
          color={props.starred ? "yellow" : "black"}/>
          }
        </span>
        <Header.Subheader>{props.uniqueUsers} user{props.uniqueUsers ===1 ? "" :"s"}</Header.Subheader>
      </Header>
      <Header floated="right" >
        <Input
       
          name="search"
          icon="search"
          placeholder="Search for message..."
          size="mini"
          onChange={props.searchMessage}
        />
      </Header>
    </Segment>
  );
};
export default MessageHeader;
