import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 400px;
  border-spacing: 0;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
  transition: transform ${props => props.theme.animation};

  &:hover {
    transform: scale(1.03);
  }
`;

export const TransactionTableHead = styled.thead`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
`;

export const TransactionTableHeadTitle = styled.th`
  padding: ${props => props.theme.spacing(2)};

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.white};
  }
`;

export const TransactionTableRow = styled.tr`
  transition: color ${props => props.theme.animation};
  transition: background-color ${props => props.theme.animation};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.tableRow};
  }

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primaryText};
  }
`;

export const TransactionTableData = styled.td`
  padding: ${props => props.theme.spacing(2)};

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.tableBorder};
  }
`;
