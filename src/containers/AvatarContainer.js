import { connect } from 'react-redux'
import Avatar from 'src/components/Avatar/Avatar'
import { setAvatar } from 'src/actions/userActions'

const mapStateToProps = ({ user }) => ({
  avatarFile: user.avatarFile,
  avatar: user.avatar,
  pseudo: user.nickname,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (preview) => dispatch(setAvatar(preview)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
