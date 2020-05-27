import bcrypt from 'bcrypt';

/**
 * plain text 암호화
 */
export default async (plainPassword: string): Promise<string> => {
  try {
    const result = await bcrypt.hash(plainPassword, 10);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
