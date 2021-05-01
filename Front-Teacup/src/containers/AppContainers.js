import { connect } from 'react-redux';
import App from 'src/components/App/App';

  
const mapStateToProps = ({app}) => ({

    text: app.text
  
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
