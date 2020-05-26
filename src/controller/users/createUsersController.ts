import experss from 'express';
import insertUser, {
  userObjectType,
} from '../../funtions/insertUser/insertUser';

export default async (
  req: experss.Request,
  res: experss.Response
): Promise<void> => {
  const userObject: userObjectType = req.body;

  try {
    await insertUser(userObject);
    res.json({ status: '유저 생성에 성공했습니다.' }).status(200);
  } catch (error) {
    res.json({ status: '유저 생성에 실패했습니다.' }).status(400);
  }
};
