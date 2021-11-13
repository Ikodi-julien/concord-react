export const POST_NEW_PROFILE = 'POST_NEW_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_ME_TAGS = 'UPDATE_ME_TAGS';
export const SET_PROFILE_INPUT_VALUE = 'SET_PROFILE_INPUT_VALUE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
// export const UPDATE_ME_TAGS_SUCCESS = 'UPDATE_ME_TAGS_SUCCESS';
export const SET_TAGS_DROPDOWN_VALUE = 'SET_TAGS_DROPDOWN_VALUE';
export const SET_TAGS_DROPDOWN_IDS = 'SET_TAGS_DROPDOWN_IDS';
export const TOGGLE_ACTIVE_BTN = 'TOGGLE_ACTIVE_BTN';
export const FETCH_MY_PROFILE = 'FETCH_MY_PROFILE';
export const FETCH_MY_PROFILE_SUCCESS = 'FETCH_MY_PROFILE_SUCCESS';
export const SUBMIT_DELETE_AUTH_ACCOUNT = 'SUBMIT_DELETE_AUTH_ACCOUNT';

export const fetchMyProfile = () => ({ type: FETCH_MY_PROFILE });
export const fetchMyProfileSuccess = (data) => ({ type: FETCH_MY_PROFILE_SUCCESS, data });
export const postNewProfil = (data) => ({ type: POST_NEW_PROFILE, data });
export const updateProfile = () => ({ type: UPDATE_PROFILE });
export const updateMeTags = () => ({ type: UPDATE_ME_TAGS });
export const setProfileInputValue = (objectInput) => (
  { type: SET_PROFILE_INPUT_VALUE, value: objectInput }
);
export const updateProfileSuccess = () => ({ type: UPDATE_PROFILE_SUCCESS });
// export const updateMeTagsSuccess = () => ({ type: UPDATE_ME_TAGS_SUCCESS });
export const setTagsDropdownValue = (array) => ({ type: SET_TAGS_DROPDOWN_VALUE, value: array });
export const setTagsDropDownIds = (array) => ({ type: SET_TAGS_DROPDOWN_IDS, value: array });
export const toggleActiveBtn = (btnName) => ({ type: TOGGLE_ACTIVE_BTN, value: btnName });
export const submitDeleteAuthAccount = () => ({ type: SUBMIT_DELETE_AUTH_ACCOUNT });
