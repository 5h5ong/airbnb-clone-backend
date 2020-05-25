import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import onlineExperiencesController from './controller/onlineExperiences/onlineExperiencesController';

const port = 4000;
const app = express();

// cors 설정
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/lists/online-experiences', onlineExperiencesController);

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
