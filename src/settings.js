// eslint-disable-next-line import/prefer-default-export
export const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8000'
  : 'https://chat-api-ikodi.herokuapp.com';
