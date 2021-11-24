import { connect } from 'react-redux';
import NicknameAndMailModal from 'src/components/Profile/NicknameAndMailModal/NicknameAndMailModal.js';
import {
  setInputValue,
} from 'src/actions/appActions';
import {
  submitUpdateAuthCredentials,
} from 'src/actions/authActions';

const mapStateToProps = ({ auth, app }) => ({
  updateMailNew: auth.updateMailNew,
  updateNicknameNew: auth.updateNicknameNew,
  updateNickNameAndMailPassword: auth.updateNickNameAndMailPassword,
  updateNickNameAndMailInfoIsVible: auth.updateNickNameAndMailInfoIsVible,
  appInfo: app.appInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (object) => dispatch(setInputValue(object)),
  submitUpdateAuthCredentials: () => dispatch(submitUpdateAuthCredentials()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NicknameAndMailModal);
