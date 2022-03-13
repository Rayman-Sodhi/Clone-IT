import React from "react";
import { Grid, Header, Icon, Image, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../../../server/firebase";
import logo from '../../../images/slack.png';


import "./UserInfo.css";

const UserInfo = (props) => {
  const getDropDownOptions = () => {
    return [
      {
        key: "signout",
        text: <span onClick={signOut}>Sign Out</span>,
      },
    ];
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("user signed out"));
  };

  if (props.user) {
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row className="userinfo_grid_row">
            <Header inverted as="h2">
              {/* <Icon name="slack" /> */}
          <img src={logo} style={{ height: "30px", width: "30px" }} />

              
              <Header.Content>Slack</Header.Content>
            </Header>
            <Header className="userinfo_displayname" inverted as="h4">
              <Dropdown
                trigger={
                  <span>
                    <Image src={props.user.photoURL} avatar></Image>
                    {props.user.displayName}
                  </span>
                }
                options={getDropDownOptions()}
              ></Dropdown>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(UserInfo);
