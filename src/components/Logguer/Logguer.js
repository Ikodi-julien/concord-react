import { useEffect } from 'react';

const Logguer = ({ getUserInfos }) => {
  useEffect(() => {
    getUserInfos();
  }, []);
  return null;
};

export default Logguer;
