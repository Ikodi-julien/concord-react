import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';

const mapStateToProps = ({ app }) => ({

  tagsOptions: app.tagsOptions,

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
