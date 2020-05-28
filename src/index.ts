import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import onlineExperiencesController from './controller/onlineExperiences/onlineExperiencesController';
import createUsersController from './controller/users/createUsersController';
import VerifyUserController from './controller/users/VerifyUserController';
import createRepository from './functions/createRepository/createRepository';
import Users from './entity/Users';

const port = 4000;
const app = express();

// cors 설정
app.use(cors());
// body json 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// passport 설정
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};
passport.use(
  new Strategy(opts, async (jwtPayload, done) => {
    const userRepo = createRepository<Users>(Users);

    try {
      const user = await userRepo.findOne(jwtPayload.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false, { message: '유저가 존재하지 않습니다.' });
    } catch (error) {
      return done(error, false, {
        message: '인증 과정에서 에러가 발생하였습니다.',
      });
    }
  })
);

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/verify/user', VerifyUserController);
app.get('/lists/online-experiences', onlineExperiencesController);
app.post('/create/user', createUsersController);

app.listen(port, async () => {
  /* eslint-disable */

  // Create typeorm connection
  try {
    const connection = await createConnection({
      type: 'mongodb',
      host: 'localhost',
      database: 'airbnb-clone',
      port: 27017,
      useUnifiedTopology: true,
      entities: [__dirname + '/entity/*.ts'],
    });
    console.log('데이터베이스 연결 완료.');
  } catch (error) {
    console.log(error);
  }

  console.log(`Example app listening at http://localhost:${port}`);

  /* eslint-enable */
});
