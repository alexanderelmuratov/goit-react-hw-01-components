import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.primaryBg};
  color: ${props => props.theme.colors.primaryText};
  line-height: 1.5;
`;
