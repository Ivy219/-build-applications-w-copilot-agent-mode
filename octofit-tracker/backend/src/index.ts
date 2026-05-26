import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit';

mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

app.get('/', (_req, res) => res.send('OctoFit Tracker API'));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
