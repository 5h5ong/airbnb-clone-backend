import bcrypt from 'bcrypt';

/**
 * 암호화된 string과 plain string이 맞는지 비교
 *
 * 맞을 시 true, 아닐 시 false
 */
export default async (
  plainString: string,
  encryptedString: string
): Promise<boolean> => {
  try {
    const result = await bcrypt.compare(plainString, encryptedString);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
