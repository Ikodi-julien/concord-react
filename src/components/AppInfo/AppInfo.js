import React from 'react';
import PropTypes from 'prop-types';
import './appinfo.scss';

const AppInfo = ({appInfo, isVisible}) => {

  return (
    <p className={isVisible ? 'errorinfo --visible' : 'errorinfo'}>
      {appInfo}
    </p>
  )
}

AppInfo.propTypes = {
  appInfo: PropTypes.string,
  isVisible: PropTypes.bool,
}
export default AppInfo;
