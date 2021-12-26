import styled from '@emotion/styled';
import { getRandomColor } from 'utils/getRandomColor';

export const StatSection = styled.section`
  max-width: 400px;
  margin: ${props => props.theme.spacing(5)} auto;
  padding: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: transform ${props => props.theme.animation};

  &:hover {
    transform: scale(1.03);
  }
`;

export const StatTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(5)};
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  background-color: ${getRandomColor};
`;
