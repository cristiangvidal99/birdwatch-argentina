import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import { notFoundHandler, errorHandler } from './middlewares/errorHandler';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
