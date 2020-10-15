import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #202225;
  width: 72px;
`;

export const ContentWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;

  :not(:last-child) {
    :after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: calc(50% - 16px);
      width: 32px;
      height: 2px;
      background-color: #FFFFFF0F;
      border-radius: 5px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border: none;
  transition: .15s;
  background-color: #36393F;
  border-radius: 50%;
  margin: 0 auto;

  ${({ background }) => background && `
    background: url(${background}) center no-repeat;
    background-size: 110%;

    :hover {
      background-size: cover;
    }
  `}

  :hover {
    border-radius: 16px;
    background-color: #7289DA;

    + span {
      left: 0;
      top: calc(50% - 10px);
      width: 4px;
      height: 20px;
    }
  }
`;

export const ButtonWrapper = styled.li`
  position: relative;
  width: 100%;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  span {
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    background-color: #FFF;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: .15s;
  }

  ${Button} {
    ${({ active }) => active && `
      background-color: #7289DA;
      border-radius: 16px;

      + span {
        left: 0;
        top: calc(50% - 20px);
        width: 4px;
        height: 40px;
      }
    `}
  }
`;

export const LogoBox = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: #7289DA;
  border-radius: 16px;
`;

export const Divisor = styled.div`
  width: 32px;
  height: 2px;
  background-color: #FFFFFF0F;
  margin: 8px 0;
  border-radius: 5px;
`;

export const ServerIcon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: ${props => props.active ? '16px' : '100%'};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active ? '#7289DA' : '#36393F'};
  margin-bottom: 8px;
  transition: .15s;

  :hover {
    border-radius: 16px;
    background-color: #7289DA;
  }
`;

export const ActionIcon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: #36393F;
  transition: .15s;

  :hover {
    border-radius: 16px;
    background-color: #43B581;
    color: #FFF;
  }
`;
