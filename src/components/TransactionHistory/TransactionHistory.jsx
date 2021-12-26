import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableHeadTitle,
  TransactionTableRow,
  TransactionTableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionTableHeadTitle>Type</TransactionTableHeadTitle>
          <TransactionTableHeadTitle>Amount</TransactionTableHeadTitle>
          <TransactionTableHeadTitle>Currency</TransactionTableHeadTitle>
        </tr>
      </TransactionTableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableRow key={id}>
            <TransactionTableData>{type}</TransactionTableData>
            <TransactionTableData>{amount}</TransactionTableData>
            <TransactionTableData>{currency}</TransactionTableData>
          </TransactionTableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
