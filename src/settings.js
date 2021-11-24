// eslint-disable-next-line import/prefer-default-export
export const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8002'
  : 'https://concord.ikodi.eu';

export const AUTH_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5050'
  : 'https://auth.ikodi.eu';

export const GITHUB_CONNECT_URL = 'https://github.com/login/oauth/authorize';
