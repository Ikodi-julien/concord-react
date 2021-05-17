import { connect } from 'react-redux';
import Editor from 'src/components/Editor/Editor';
import { setQuillContent, channelFormSubmit } from 'src/actions/channelActions';

const mapStateToProps = ({ channel }) => ({
  quill: channel.quill,
  quillContent: channel.quillContent,
  reinitQuill: channel.reinitQuill,
});

const mapDispatchToProps = (dispatch) => ({
  setQuillContent: (text) => dispatch(setQuillContent(text)),
  channelFormSubmit: () => dispatch(channelFormSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
