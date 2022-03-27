import styled from 'styled-components';

export const SigninContainer = styled.div`
    background-image: url(./assets/Rockstar-social-club-wallpaper.jpg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .signin-section {
        display: flex;
        flex-direction: column;
        background-color: white;
        height: 18.2rem;
        width: 31.25rem;
        // border: black solid 1px;
        border-radius: 4px;
        box-shadow: 1px 2px 5px 5px;
        font-size: 12px;
        margin: 10px;
    }
    
    .flex-input {
        display: flex;
        flex-direction: row;
    }
    
    input {
        font-size: 17px;
        align-items: center;
        margin: 10px;
        padding: 10px;
        background: rgb(232, 240, 254);
        border: 1px solid #e6e6e6;
        border-radius: 4px;
    }
    
    h2 {
        margin: 10px;
    }
    .text {
        margin: 4px;
        font-size: 15px;
    }
    
    .forgot-password-section {
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    .forgot-link {
        color: #fcaf17;
        font-size: 15px;
    }
    .btn-signin {
        height: 2rem;
        width: 90px;
        border: solid 1px #fcaf17;
        border-radius: 4px;
        background: linear-gradient(90deg,#f7931e,#fcaf17);
        font-size: 15px;
        color: #fff;
        &:hover {
            background-color: #fcaf17;
        }
    }
    
    .social-media-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        height: 5rem;
        width: 31.25rem;
        border-radius: 4px;
        color: #4d4d4d;
        .fa-playstation {
            margin: 10px;
            font-size: 35px;
        }
        .fa-xbox {
            margin: 10px;
            font-size: 35px;
        }
        .fa-facebook {
            margin: 10px;
            font-size: 35px;
        }
        .fa-google {
            margin: 10px;
            font-size: 35px;
        }
        .fa-twitter {
            margin: 10px;
            font-size: 35px;
        }
    }
`;

