import dotenv from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import globalRouter from './router/routes';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', globalRouter);

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('💥 Unhandled Rejection:', reason);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on ${PORT}`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
});
