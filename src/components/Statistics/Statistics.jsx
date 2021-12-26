import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
