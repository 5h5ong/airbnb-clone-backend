import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  email: string;
}

/**
 * json web token 생성
 */
export default async (payload: TokenPayload): Promise<string> => {
  const secret = process.env.JWT_SECRET_KEY;

  if (secret) {
    return jwt.sign(payload, secret);
  }
  throw new Error('Dotenv Error! SECRET_KEY not exists.');
};
