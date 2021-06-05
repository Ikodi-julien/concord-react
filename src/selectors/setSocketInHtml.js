import { API_URL } from 'src/settings';

export default () => {
  const body = document.getElementsByTagName('body')[0];
  const socketScript = document.createElement('script');
  socketScript.src = `${API_URL}/socket.io/socket.io.js`;
  body.insertBefore(socketScript, null);
};
