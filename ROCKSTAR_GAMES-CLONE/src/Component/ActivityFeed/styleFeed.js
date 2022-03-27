import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Banner = styled.div`
  clip-path: polygon(100% 0,100% 100%,50% calc(100% - 50px),0 100%,0 0);
  margin-bottom: -20px;
  padding: 20px;
  background-color: ${props => props.theme.mainBackgroundColor}
`
export const ProfileSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1500px;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .profile-img {
      margin: 10px 0;
      border: 1px solid #fff;
    }
    .mini-profile {
        margin: 0 10px;
        flex: 1;
    }
    .edit-btn {
        margin: 10px 0;
        .edit {
            background-color: rgba(26,26,26,.7);
            color: #fff;
            height: 35px;
            width: 70px;
            border: #fff solid 1px;
            border-radius: 4px;
            &:hover {
                background-color: #000;
            }
        }
    }
`;

export const SimpleNav = styled.div`
    background-color: #fff;
    border-radius: 4px;
      margin: 0 auto;
      max-width: 1500px;
    ul {
        display: flex;
    }
    li {
        margin: 15px;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 700;
        &:hover {
            color: #fcaf17;
        }
    }
    @media screen and (max-width: 700px) {
        ul {
           flex-direction: column; 
           align-items: center;
           justify-content: center;
        }
    }
`;

export const RecentActivitySection = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1500px;
    .activity-title {
        flex: 1;
    }
    .filter {
        font-weight: 700;
        font-size: 18px;
        text-decoration: none;
        color: white;
        &:hover {
            color: lightgrey;
        }
    }
`;

    export const WallGrid = styled.main`
      display: grid;
      grid-template-areas: 
      "activitycard friendcard1 friendcard2"
      "statscard photocard";
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
      .activity-card {
        display: flex;
        box-shadow: 2px 2px 4px #888888;
        margin: 0 auto;
        max-width: 1420px;
        textarea {
          width: 100%;
          border: 1px solid #f2f2f2;
          padding: 0 40px;
        }
        .img-card {
          position: absolute;
          top: 27px;
          left: 25px;
          border-radius: 50%;
        }
        .text-btn {
          display: flex;
          justify-content: space-between;
        }
        .btn-post {
          height: 35px;
          width: 50px;
          background: linear-gradient(90deg, #f7931e, #fcaf17);
          border: 1px solid #fcaf17;
          border-radius: 4px;
          &:hover {
            background-color: lightyellow;
          }
        }
      }
      
      .compare-stats-card {
        .card-body-section {
          background-image: url(./assets/sc-card-stats.jpg);
          min-height: 357px;
        }
      }
      
      .activity-card-friend {
        // padding: 65px;
        box-shadow: 2px 2px 4px #888888;
        .request-tab {
          display: flex;
          align-items: center;
          margin: 10px 0;
          border: 1px solid #e6e6e6;
          padding: 2px;
        }
        .main-img {
          display: flex;
        }
        .username-detail {
          margin: 0 5px;
          flex: 1;
        }
        .fa-user-friends {
          border-radius: 50%;
          border: 1px solid #e6e6e6;
          padding: 5px;
        }
        .update-section {
          display: flex;
        }
        .icon-section {
          flex: 1;
        }
      }
      
      .snapmatic-card-img {
        .card-body-section {
          background-image: url(./assets/sc-card-snapmatic.jpg);
          min-height: 312px;
        }
      }
    `
export const WallActivitySection = styled(Card)`
    display: flex;
    box-shadow: ${props => props.theme.boxShadow};
    margin: 0 auto;
    max-width: 1420px;
    textarea {
        width: 100%;
        border: 1px solid #f2f2f2;
        padding: 0 40px;
        margin: 10px 0;
    }
    input {
      width: 100%;
    }
    .img-card {
        position: absolute;
        top: 67px;
        left: 25px;
        border-radius: 50%;
    }
    .text-btn {
        display: flex;
        justify-content: space-between;
    }
    .btn-post {
        height: 35px;
        width: 50px;
        background: linear-gradient(90deg, #f7931e, #fcaf17);
        border: 1px solid #fcaf17;
        border-radius: 4px;
        &:hover {
            background-color: lightyellow;
        }
    }
`;

export const FriendNotification = styled(Card)`
    // padding: 65px;
    box-shadow: ${props => props.theme.boxShadow};
    .request-tab {
        display: flex;
        align-items: center;
        margin: 10px 0;
        border: 1px solid #e6e6e6;
        padding: 2px;
    }
    .main-img {
        display: flex;
    }
    .username-detail {
        margin: 0 5px;
        flex: 1;
    }
    .fa-user-friends {
        border-radius: 50%;
        border: 1px solid #e6e6e6;
        padding: 5px;
    }
    .update-section {
        display: flex;
    }
    .icon-section {
        flex: 1;
    }
`;

export const CompareStats = styled(Card)`
  box-shadow: ${props => props.theme.boxShadow};
    .card-body-section {
        background-image: url(./assets/sc-card-stats.jpg);
        min-height: 357px;
    }
`;

export const SnapmaticPhotos = styled(Card)`
  box-shadow: ${props => props.theme.boxShadow};
    .card-body-section {
        background-image: url(./assets/sc-card-snapmatic.jpg);
        min-height: 312px;
    }
`;

    export const StyledButton = styled(Button)`
      background: linear-gradient(90deg,#f7931e,#fcaf17);
      border-color: #fcaf17;
      width: 100%;
    `;

export const PostCard = styled(Card)`
  margin: 10px 0;
  padding: 15px;
  
`
