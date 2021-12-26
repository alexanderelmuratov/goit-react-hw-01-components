import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendSet } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSet>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendSet>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
