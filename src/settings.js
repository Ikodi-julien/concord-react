// eslint-disable-next-line import/prefer-default-export
export const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:8002'
  : 'https://concordapi.ikodi.eu';

export const AUTH_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5050'
  : 'https://auth.ikodi.eu';

export const GOOGLE_CONNECT_URL = process.env.NODE_ENV === 'development'
  ? 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=53166717943-a686djj3r9tdiig281djlt67c0tl4q3v.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle'
  : 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=490960741385-f5u24kooppst98kl3sfokliapi7dff4f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fconcord.ikodi.eu%2Fauth%2Fgoogle';
