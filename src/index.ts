import express from 'express';
import { connect } from 'http2';
import mongoose from 'mongoose';
import config from './config';
import { Movie } from './models/movie.model';
import { User, UserDocument } from './models/user.model';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Conseguimos criar um servidor Express'
  })
});

app.listen(config.PORT, () => {
  console.log('Server funcionando na porta: ', config.PORT);
  mongoose.connect(config.MONGO_URI);

})


