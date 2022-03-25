import styled from "styled-components";

export const BannerContainer = styled.div`
  clip-path: polygon(100% 0,100% 100%,50% calc(100% - 50px),0 100%,0 0);
  margin-bottom: -20px;
  padding: 20px;
`

export const ProfileSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1420px;
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
      max-width: 1420px;
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
