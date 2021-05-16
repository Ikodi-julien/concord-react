import { connect } from 'react-redux';
import Editor from 'src/components/Editor/Editor';
import { setQuillText } from 'src/actions/channelActions';

const mapStateToProps = ({ channel }) => ({
  quill: channel.quill,
  quillContent: channel.quillContent,
});

const mapDispatchToProps = (dispatch) => ({
  setQuillText: (text) => dispatch(setQuillText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
