import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  mix-blend-mode: normal;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 200px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      margin-right: 15px;
      font-weight: bold;
      color: #717171;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #717171;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #e61919;
      border: none;
      background: none;
    }
  }
`;
