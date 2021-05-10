import { connect } from 'react-redux';
import App from 'src/components/App/App';

const mapStateToProps = ({ app }) => ({
  isUserLoggued: app.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
