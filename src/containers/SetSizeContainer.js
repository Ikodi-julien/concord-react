import { connect } from 'react-redux';
import { setWindowSize } from 'src/actions/appActions';
import SetSize from 'src/components/SetSize/SetSize';

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
  setWindowSize: (windowSize) => dispatch(setWindowSize(windowSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetSize);
