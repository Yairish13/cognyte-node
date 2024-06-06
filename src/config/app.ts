import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import NotFoundError from '../api/handlers/not-found-error';
import routes from '../api/routes'
import { errorHandler } from '../api/middlewares/error-handler';

const app = express();
app.set('trust proxy', true);
app.use(json());

app.use('/', routes);

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError('Route not found'));
});

app.use(errorHandler);

export { app };