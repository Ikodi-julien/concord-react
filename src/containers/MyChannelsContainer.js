import { connect } from 'react-redux';
import MyChannels from 'src/components/Channel/MyChannels/MyChannels';
import {
  fetchChannel,
  toggleMyChannels,
} from 'src/actions/channelActions';
import { fetchMyChannels } from 'src/actions/userActions';

const mapStateToProps = ({ user, channel }) => ({
  myChannelLinks: user.myChannelLinks,
  showMychannels: channel.showMychannels,
  imageURL: channel.img_url,
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: (id) => dispatch(fetchChannel(id)),
  toggleMyChannels: () => dispatch(toggleMyChannels()),
  fetchMyChannels: () => dispatch(fetchMyChannels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyChannels);
