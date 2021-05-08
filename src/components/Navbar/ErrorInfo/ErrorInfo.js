import React from 'react';
import './errorinfo.scss';

const ErrorInfo = ({errorMessage, isVisible}) => {

  return (
    <p className={isVisible ? 'errorinfo --visible' : 'errorinfo'}>
      {errorMessage}
    </p>
  )
}

export default ErrorInfo;
