import experss from 'express';
import insertUser, {
  userObjectType,
} from '../../funtions/insertUser/insertUser';
import checkUserObject from '../../funtions/check/checkUserObject';

export default async (
  req: experss.Request,
  res: experss.Response
): Promise<void> => {
  const userObject: userObjectType = req.body;

  try {
    // await insertUser(userObject);
    if (checkUserObject(userObject)) {
      await insertUser(userObject);
      res.json({ status: '유저 생성에 성공했습니다.' }).status(200);
    } else {
      throw new Error('property 형태가 올바르지 않음.');
    }
  } catch (error) {
    res.status(400).json({ status: '유저 생성에 실패했습니다.' });
  }
};
