import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  padding: 35px 25px 35px 25px;
  border-radius: 4px;

  img {
    max-width: 230px;
    margin-top: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;

    strong {
      color: #000;
      text-align: start;
      margin-bottom: 5px;
    }

    input {
      background: #fff;
      border: 1 solid #222;
      height: 40px;
      padding: 0 15px;
      color: #222;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: #000;
      }
    }
  }
`;
