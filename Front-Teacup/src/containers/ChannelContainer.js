import { connect } from 'react-redux';
import Channel from 'src/components/Channel/Channel';
import {setInputValue} from 'src/actions/channelActions';

  
const mapStateToProps = ({channel}) => ({

    channel,
  
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (inputObject) => {
    dispatch(setInputValue(inputObject))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
