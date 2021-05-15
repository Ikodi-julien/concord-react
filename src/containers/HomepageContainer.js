import { connect } from 'react-redux';
import Homepage from 'src/components/Homepage/Homepage';
// import fakeChannels from 'src/middlewares/fakeChannels';

const mapStateToProps = ({ user }) => ({
  myChannels: user.channels,
  recommendedChannels: user.recommendedChannels,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
