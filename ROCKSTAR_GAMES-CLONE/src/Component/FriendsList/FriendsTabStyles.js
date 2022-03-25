import styled from 'styled-components';

const MainWrapper = styled.main`
  .friends-wrapper {
    max-width: 1420px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    position: relative;
    bottom: 40px;
    z-index: 1000;
    padding: 0 1.25rem 1.25rem;
    border-radius: 3px;
    box-shadow: ${props => props.theme.boxShadow};
  }
  .friends-card {
    padding: 10px 0;
  }
  .find-friends {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border: 0;
      background-color: rgba(252, 175, 23);
      padding: 10px;
      border-radius: 4px;
    }
  }
  .search-friends {
    display: flex;
    padding: 10px 0;
  }
  .friends-searchbar {
    flex: 0 1 30%;
  }
  .dropdown-ui {
    padding: 0 1.25rem 0 0;
    select {
      width: 100%;
      height: 2.7rem;
    }
  }
  .search-input {
    flex: 0 1 70%;
    input {
      width: 100%;
      height: 2.7rem;
    }
  }
  .friends-list {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .friends-list {
      flex-direction: column;
    }
  }
`

const FriendCard = styled.div`
  padding: 15px;
  width: 30%;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile-flex {
    display: flex;
    align-items: center;
    img {
      margin: 0 10px;
    }
    p {
      font-weight: bold;
    }
  }
  .crew-flex {
    p {
      font-weight: bold;
    }
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }
`;

export {
    MainWrapper,
    FriendCard
}

// padding: 0 1.25rem 0 0;
