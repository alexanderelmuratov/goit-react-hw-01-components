import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 160px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: transform ${props => props.theme.animation};

  &:hover {
    transform: scale(1.03);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  margin-bottom: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.primaryBg};
  border-radius: 50%;
`;

export const InfoName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 16px;
`;

export const Info = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 12px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing(4)};
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-weight: 400;
  font-size: 12px;
`;
