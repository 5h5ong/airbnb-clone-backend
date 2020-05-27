import express from 'express';
import createRepository from '../../functions/createRepository/createRepository';
import Users from '../../entity/Users';
import checkEncryptedString from '../../functions/encryption/checkEncryptedString';

interface VerifyUserObject {
  email: string;
  password: string;
}

export default async (req: express.Request, res: express.Response) => {
  const jsonObject: VerifyUserObject = req.body;

  // find user using email
  const userRepo = createRepository<Users>(Users);
  const foundUser = await userRepo.findOne({ email: jsonObject.email });

  // check user's password
  if (foundUser) {
    const passwordResult = await checkEncryptedString(
      jsonObject.password,
      foundUser.password
    );
    if (passwordResult) {
      res.status(200).json({ message: '유저 인증이 성공했습니다.' });
    } else {
      res.status(400).json({ message: '유저 인증에 실패하였습니다.' });
    }
  } else {
    res.status(400).json({ message: '유저 인증에 실패하였습니다.' });
  }
};
