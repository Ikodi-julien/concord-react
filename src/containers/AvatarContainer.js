import { connect } from 'react-redux'
import Avatar from 'src/components/Avatar/Avatar'
import { setPreview } from 'src/actions/userActions'

const mapStateToProps = ({ user }) => ({
  avatarSrc: user.avatarSrc,
  preview: user.avatarPreview,
})

const mapDispatchToProps = (dispatch) => ({
  setPreview: (preview) => dispatch(setPreview(preview)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
