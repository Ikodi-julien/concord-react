// == Import npm
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SetPathname = ({ setIsRefresh }) => {
  const history = useHistory();

  useEffect(() => {
    console.log('on dispatchsetIsRefresh');
    setIsRefresh(false);
    const path = sessionStorage.getItem('lastpathname');
    if (path) {
      history.push(path);
    }
  });
  return null;
};

// == Export
export default SetPathname;
