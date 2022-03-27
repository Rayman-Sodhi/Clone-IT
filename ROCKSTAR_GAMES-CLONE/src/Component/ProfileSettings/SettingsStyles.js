import styled from 'styled-components';

export const SettingsContainer = styled.div`
  max-width: 1420px;
  margin: 20px auto;
  height: 250px;
  background-color: #F0F0F0;
  //display: flex;
  box-shadow: ${props => props.theme.boxShadow};
  h1 {
    padding: 10px 20px;
  }
`

export const CurrentUserContainer = styled.div`
  padding: 1.5rem;
  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;
      p {
        margin: 15px;
      }
    }
  }
`;

export const AccountSettingsContainer = styled.div``;
