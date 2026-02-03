import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { initDB } from './configs/db.js';
import ratelimiter from './middleware/rateLimiter.js';
import cors from 'cors';

import transactionsRoute from './routes/transactionsRoute.js';

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 9009;

//middlewares
app.use(ratelimiter)
app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
  origin: "*", // or restrict to your frontend later
  methods: ["GET", "POST", "DELETE"],
}));

//routes
app.get('/', (req, res) => {
  res.status(200).send('Server is running!');
});

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});