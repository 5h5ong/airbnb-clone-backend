import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import onlineExperiencesController from './controller/onlineExperiences/onlineExperiencesController';
import createUsersController from './controller/users/createUsersController';

const port = 4000;
const app = express();

// cors 설정
app.use(cors());
// body json 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
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
