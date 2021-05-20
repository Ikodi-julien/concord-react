import { connect } from 'react-redux';
import { setIsRefresh } from 'src/actions/appActions';
import SetPathname from 'src/components/SetPathname/SetPathname';

const mapStateToProps = () => ({ });

const mapDispatchToProps = (dispatch) => ({
  setIsRefresh: (bool) => dispatch(setIsRefresh(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetPathname);
