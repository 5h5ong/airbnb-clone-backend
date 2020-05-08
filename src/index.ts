import express from 'express';
import cors from 'cors';
import onlineExperiencesController from './controller/onlineExperiences/onlineExperiencesController';

const port = 4000;
const app = express();

// cors 설정
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/lists/online-experiences', onlineExperiencesController);

app.listen(
  port,
  () =>
    /* eslint-disable */
    console.log(`Example app listening at http://localhost:${port}`)
  /* eslint-enable */
);
