import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import env from '../config/env';

export interface TokenPayload extends JwtPayload {
  userId: number;
  email: string;
}

function signToken(payload: TokenPayload): string {
  const options: SignOptions = {
    expiresIn: env.jwt.expiresIn as NonNullable<SignOptions['expiresIn']>,
  };

  return jwt.sign(payload as object, env.jwt.secret, options);
}

function verifyToken(token: string): TokenPayload {
  const decoded = jwt.verify(token, env.jwt.secret);

  if (typeof decoded === 'string' || typeof decoded.userId !== 'number' || typeof decoded.email !== 'string') {
    throw new Error('Token invalido');
  }

  return decoded as TokenPayload;
}

export {
  signToken,
  verifyToken,
};
