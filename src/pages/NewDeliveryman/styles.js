import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 900px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    strong {
      color: #444;
      font-size: 18px;
      font-weight: bold;
    }

    div {
      display: flex;
    }
  }

  form {
    height: 100%;
    background: #ffffff;
    padding: 20px;
    border-radius: 4px;

    .line {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .group {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px 10px;

        span {
          color: #444;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 7px;
        }
      }
    }

    input {
      background: #fff;
      border: 1px solid #999;
      border-radius: 5px;
      height: 30px;
      padding: 5px 10px;
      color: #999;
      margin: 0 0 10px;
    }

    .avatar {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Button = styled.button`
  background: ${props => (props.cancel ? '#CCCCCC' : '#7d40e7')};
  border: none;
  border-radius: 4px;
  width: 90px;
  height: 28px;
  font-size: 10px;
  color: #fff;
  padding: 0 5px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
