import { connect } from 'react-redux';
import UsersInChannelList from 'src/components/Channel/UsersInChannelList/UsersInChannelList';
import {
  toggleUsersInChannel,
} from 'src/actions/channelActions';
import {

} from 'src/actions/userActions';

const mapStateToProps = ({ channel }) => ({
  users: channel.users,
  showUsersInChannel: channel.showUsersInChannel,
});

const mapDispatchToProps = (dispatch) => ({
  toggleUsersInChannel: () => dispatch(toggleUsersInChannel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersInChannelList);
