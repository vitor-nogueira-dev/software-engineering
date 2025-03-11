import express from 'express';
import cors from 'cors';
import pkg from 'body-parser';
import { routes } from './routes/routes.js';
import db from './database/database.js';

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
