import PropTypes from 'prop-types';
import {
  FriendSetUnit,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendSetUnit>
      <FriendStatus isOnline={isOnline} />
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendSetUnit>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
