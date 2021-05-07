import { connect } from 'react-redux';
import Channel from 'src/components/Channel/Channel';
import {
  setInputValue,
  fetchChannel,
  channelFormSubmit,
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
    console.log('channelContainer formSubmit');
    dispatch(channelFormSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
