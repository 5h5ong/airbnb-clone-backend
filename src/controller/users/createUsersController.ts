import experss from 'express';
import insertUser, {
  userObjectType,
} from '../../functions/insertUser/insertUser';
import checkUserObject from '../../functions/check/checkUserObject';
import stringEncryption from '../../functions/encryption/stringEncryption';

export default async (
  req: experss.Request,
  res: experss.Response
): Promise<void> => {
  const userObject: userObjectType = req.body;

  try {
    // await insertUser(userObject);
    if (checkUserObject(userObject)) {
      // user password 암호화
      const encryptedObject: userObjectType = {
        ...userObject,
        password: await stringEncryption(userObject.password),
      };

      await insertUser(encryptedObject);
      res.json({ status: '유저 생성에 성공했습니다.' }).status(200);
    } else {
      throw new Error('property 형태가 올바르지 않음.');
    }
  } catch (error) {
    res.status(400).json({ status: '유저 생성에 실패했습니다.' });
  }
};
