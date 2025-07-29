import express from 'express';
import { scrap } from './scrapt.mjs';

const app = express();
const port = 6500;

app.get('/', async (req, res) => {
  try {
    const targetUrl = req.query.url;

    if (!targetUrl) {
      return res.status(400).send('Missing ?url= parameter');
    }

    const data = await scrap(targetUrl);
    res.send({ data });
  } catch (error) {
    res.status(500).send('Error occurred: ' + (error).message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
