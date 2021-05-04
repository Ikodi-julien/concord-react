import { connect } from 'react-redux';
import Channel from 'src/components/Channel/Channel';
import {
  setInputValue,
  fetchChannel
} from 'src/actions/channelActions';

  
const mapStateToProps = ({channel}) => ({

    channel,
  
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (inputObject) => {
    dispatch(setInputValue(inputObject))
  },
  fetchChannel: (channelId) => {
    console.log('channelContainer');
    dispatch(fetchChannel(channelId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
