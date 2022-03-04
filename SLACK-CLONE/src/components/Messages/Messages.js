import React, { useEffect, useState } from "react";
import firebase from "../../server/firebase";
import MessageHeader from "./messageHeader/MessageHeader";
import MessageInput from "./messageInput/MessageInput";
import MessageContent from "./messageContent/MessageContent";
import { connect } from "react-redux";
import { Segment, Comment } from "semantic-ui-react";
import { setfavouriteChannel,removefavouriteChannel } from "../../store/actioncreator";
import "./Messages.css";

const Messages = (props) => {
  const messageRef = firebase.database().ref("messages");
  const usersRef = firebase.database().ref("users");
  const [messageState, setMessageState] = useState([]);
  const [searchMessageState, setSearchMessageState] = useState("");

  useEffect(() => {
    setMessageState([]);
    if (props.channel) {
      messageRef.child(props.channel.id).on("child_added", (snap) => {
        setMessageState((currentState) => {
          let updatedState = [...currentState];
          updatedState.push(snap.val());
          return updatedState;
        });
      });
      return () => messageRef.child(props.channel.id).off();
    }
  }, [props.channel]);

  useEffect(() => {

    if (props.user) {
        usersRef.child(props.user.uid).child("favourite")
            .on('child_added', (snap) => {
                props.setfavouriteChannel(snap.val());
            })

        usersRef.child(props.user.uid).child("favourite")
            .on('child_removed', (snap) => {
                props.removefavouriteChannel(snap.val());
            })

        return () => usersRef.child(props.user.uid).child("favourite").off();
    }
}, [props.user])


  const displayMessages = () => {
      let messageToDisplay=searchMessageState ? filterMessageByTerm() :messageState;
    if (messageToDisplay.length > 0) {
      return messageToDisplay.map((message) => {
        return (
          <MessageContent
            ownMessage={message.user.id === props.user.uid}
            key={message.timestamp}
            message={message}
          />
        );
      });
    }
  };
  const uniqueUsersCount = () => {
    const uniqueUsers = messageState.reduce((acc, message) => {
      if (!acc.includes(message.user.name)) {
        acc.push(message.user.name);
      }
      return acc;
    }, []);
    return uniqueUsers.length;
  };
  const searchMessage = (e) => {
    const target = e.target;
    setSearchMessageState(target.value);
  };

  const filterMessageByTerm=()=>{
      const regex=new RegExp(searchMessageState,"gi");
    const messages = messageState.reduce((acc, message) => {
        if ((message.content && message.content.match(regex)) || message.user.name.match(regex)) {
          acc.push(message);
        }
        return acc;
      }, []);
      return messages;
  }
  const starChange = () => {
    let favouriteRef = usersRef.child(props.user.uid).child("favourite").child(props.channel.id);
    if (isStarred()) {
        favouriteRef.remove();
    } else {
        favouriteRef.set({ channelId: props.channel.id, channelName: props.channel.name })
    }
}

const isStarred = () => {
    return Object.keys(props.favouriteChannels).includes(props.channel?.id);
}
  return (
    <div className="messages">
      <MessageHeader
        starChange={starChange}
        starred={isStarred()}
        isPrivateChat={props.channel?.isPrivateChat}
        searchMessage={searchMessage}
        channelName={props.channel?.name}
        uniqueUsers={uniqueUsersCount()}
      />
      <Segment className="messageContent">
        <Comment.Group>{displayMessages()}</Comment.Group>
      </Segment>
      <MessageInput />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    channel: state.channel.currentChannel,
    user: state.user.currentUser,
    favouriteChannels: state.favouriteChannel.favouriteChannel
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      setfavouriteChannel: (channel) => dispatch(setfavouriteChannel(channel)),
      removefavouriteChannel: (channel) => dispatch(removefavouriteChannel(channel)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Messages);
