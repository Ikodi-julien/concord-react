import { connect } from 'react-redux';
import Logguer from 'src/components/Logguer/Logguer';
import { getUserInfos } from 'src/actions/appActions';

const mapStateToProps = (rootReducer) => ({
  uneprop: 'hello',
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: () => dispatch(getUserInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logguer);
