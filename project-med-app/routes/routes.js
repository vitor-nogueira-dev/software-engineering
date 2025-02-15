import { Router } from 'express';

let routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World!');
});

export { routes };
