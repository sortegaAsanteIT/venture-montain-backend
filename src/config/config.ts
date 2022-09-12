export const DATABASE = {
  NAME: 'node',
  HOST: 'localhost',
  PORT: '27017'
};

export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'DEVELOP';
export const AUTH0_CONFIG = {
  ISSUER: process.env.AUTH0_ISSUER,
  JWKS_URI: process.env.AUTH0_JWKS_URI || '',
  AUDIENCE: process.env.AUTH0_AUDIENCE || ''
};
