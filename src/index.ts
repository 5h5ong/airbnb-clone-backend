import express from 'express';
import onlineExperiencesController from './controller/onlineExperiences/onlineExperiencesController';

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/lists/online-experiences', onlineExperiencesController);

app.listen(
  port,
  () =>
    /* eslint-disable */
    console.log(`Example app listening at http://localhost:${port}`)
  /* eslint-enable */
);
