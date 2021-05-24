import React from 'react';
import './appinfo.scss';

const AppInfo = ({appInfo, isVisible}) => {

  return (
    <p className={isVisible ? 'errorinfo --visible' : 'errorinfo'}>
      {appInfo}
    </p>
  )
}

export default AppInfo;
