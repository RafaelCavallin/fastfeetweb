import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const Options = styled.button`
  position: absolute;
  width: 100px;
  right: -10px;
  top: 25px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 5px 0;
  z-index: 1;

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: 40px;
    top: -10px;
    width: 0;
    height: 0;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #dcdcdc;
  }

  button {
    border: 0;
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
    background: none;
    padding: 8px 0;
    color: #666;
    font-size: 12px;

    display: flex;
    align-items: start;
    margin-left: 2px;

    span {
      margin-left: 2px;
    }
  }
`;

export const ActionList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;
