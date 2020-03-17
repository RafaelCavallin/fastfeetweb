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
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  form {
    margin-bottom: 15px;
  }

  .search {
    display: flex;
    justify-content: space-between;

    input {
      border: 0.5 solid #ddd;
      height: 25px;
      padding: 0 15px;
      font-size: 12px;
    }

    button {
      background: #7d40e7;
      border: none;
      border-radius: 4px;
      width: 100px;
      height: 25px;
      font-size: 12px;
      color: #fff;
      padding: 0 5px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        margin-left: 3px;
      }
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;

  tr {
    border-radius: 4px;
    height: 40px;
    margin-bottom: 30px;
  }

  th {
    font-weight: bold;
    margin-top: 50px;
    text-align: start;
  }
`;
