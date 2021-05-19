import { connect } from 'react-redux';
import Landing from 'src/components/Landing/Landing';

const mapStateToProps = ({ app }) => ({
  isUserLoggued: app.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
