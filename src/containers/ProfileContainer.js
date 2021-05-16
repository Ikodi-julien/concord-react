import { connect } from 'react-redux';
import Profile from 'src/components/Profile/Profile';
// import fakeChannels from 'src/middlewares/fakeChannels';

const mapStateToProps = ({ app }) => ({
  tags: app.tags,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
