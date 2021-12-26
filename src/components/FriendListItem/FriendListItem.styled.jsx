import styled from '@emotion/styled';

const setBgColor = ({ isOnline, theme }) => {
  if (isOnline) {
    return theme.colors.green;
  }
  return theme.colors.red;
};

export const FriendSetUnit = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: color ${props => props.theme.animation};
  transition: background-color ${props => props.theme.animation};
  transition: transform ${props => props.theme.animation};

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primaryText};
    transform: scale(1.03);
  }
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-right: ${props => props.theme.spacing(5)};
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const FriendAvatar = styled.img`
  margin-right: ${props => props.theme.spacing(3)};
`;

export const FriendName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
`;
