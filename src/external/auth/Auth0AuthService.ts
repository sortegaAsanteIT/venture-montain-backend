import { AUTH0_CONFIG } from '../../config/config';
import { expressjwt, GetVerificationKey } from 'express-jwt';
import jwks from 'jwks-rsa';
export const AUTHORIZE_ACCESS_TOKEN = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 25,
    jwksUri: AUTH0_CONFIG.JWKS_URI
  }) as GetVerificationKey,
  audience: AUTH0_CONFIG.AUDIENCE,
  issuer: AUTH0_CONFIG.ISSUER,
  algorithms: ['RS256']
});
