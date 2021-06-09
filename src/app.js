import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors)


//Routes
app.use(indexRoutes);

export default app;
