import compression from 'compression';
import cors from 'cors';
import express, { Response, Router } from 'express';
import helmet from 'helmet';
import { PORT, NODE_ENV } from './config/config';
import { AUTHORIZE_ACCESS_TOKEN } from './external/auth/Auth0AuthService';
import { userRouter } from './presentation/userRouter';

if (NODE_ENV === 'DEVELOP') {
  require('dotenv').config();
}

const app = express();
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());

app.use(function (req, _, next) {
  console.info(`REQUEST_AUTH_HEADER: ${JSON.stringify(req.headers.authorization)}`);
  console.info(`REQUEST_BODY: ${JSON.stringify(req.body)}`);
  next();
});

const router = Router();

router.use('/users', userRouter);

router.get('/', (_, res: Response) => {
  res.status(200).json({ msg: 'API is working' });
});

router.get('/protected', AUTHORIZE_ACCESS_TOKEN, (_, res: Response) => {
  res.status(200).json({ msg: 'API is working' });
});

app.use(router);

app.use(function (err: any, req: any, res: any, next: any) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ msg: 'Invalid token' });
  }
  next(err, req, res);
});

app.listen(PORT, () => {
  console.log(`-------\n App listening on port => ${PORT}\n-------`);
});
