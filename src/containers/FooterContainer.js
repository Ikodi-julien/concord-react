import { connect } from 'react-redux';
import Footer from 'src/components/Footer/Footer';

const mapStateToProps = ({ app }) => ({
  dbDate: app.dbDate,
});

// const mapDispatchToProps = ( dispatch ) => ({

// });

export default connect(mapStateToProps)(Footer);
