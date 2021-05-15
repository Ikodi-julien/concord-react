import { connect } from 'react-redux';
import Channel from 'src/components/Channel/Channel';
import {
  setInputValue,
  fetchChannel,
  channelFormSubmit,
  toggleMyChannels,
  toggleUsersInChannel,
  userLeaveChannel,
} from 'src/actions/channelActions';

const mapStateToProps = ({ channel, user }) => ({

  channel,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (inputObject) => {
    dispatch(setInputValue(inputObject));
  },
  fetchChannel: (channelId) => {
    dispatch(fetchChannel(channelId));
  },
  channelFormSubmit: () => {
    dispatch(channelFormSubmit());
  },
  toggleMyChannels: () => dispatch(toggleMyChannels()),
  toggleUsersInChannel: () => dispatch(toggleUsersInChannel()),
  userLeaveChannel: () => dispatch(userLeaveChannel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
