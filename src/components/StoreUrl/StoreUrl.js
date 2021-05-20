// == Import npm
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StoreUrl = () => {
  const url = useLocation();
  useEffect(() => {
    sessionStorage.setItem('lastpathname', url.pathname);
  });
  return null;
};

// == Export
export default StoreUrl;
