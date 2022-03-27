import styled from 'styled-components';

export const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    //margin: 0 auto;
    //max-width: 1420px;
    ul {
        display: flex;
        align-items: center;
    }
    li {
        list-style: none;
        margin: 15px;
        text-transform: uppercase;
    }
    a {
      text-decoration: none;
      color: white;
    }
    .wrapper {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .nav-title {
        color: #fff;
    }
    .profile-min-section {
        display: flex;
        align-items: center;
        margin: 10px;
        .download-btn {
            margin-right: 25px;
            background-color: #fcaf17;
            height: 50px;
            border: none;
            &:hover {
                color: white;
            }
        }
        .bell-icon {
            margin-left: 5px;
        }
        .img-profile {
            margin-left: 15px;
            border-radius: 50%;
        }
    }
    @media screen and (max-width: 700px) {
        ul {
            flex-direction: column;
        }
        .download-btn {
            font-size: 10px;
            height: 30px;
            width: 50%;
        }
    }
`;
