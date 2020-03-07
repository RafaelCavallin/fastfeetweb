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
  }

  div {
    height: 100%;
    background: #ffffff;
  }
`;

export const Title = styled.h3`
  color: #000;
`;
