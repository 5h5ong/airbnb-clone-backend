import bcrypt from 'bcrypt';

/**
 * plain text 암호화
 */
export default async (plainString: string): Promise<string> => {
  try {
    const result = await bcrypt.hash(plainString, 10);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
