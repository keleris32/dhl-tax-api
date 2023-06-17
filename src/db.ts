import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
import config from './config';

const { MONGODB_URI } = config;

try {
  if (MONGODB_URI) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } as ConnectOptions);

    console.log('Connected to db successfully 🚀');
  } else {
    console.log('Could not read MONGODB_URI 😢');
  }
} catch (error) {
  console.error('Failed to connect to db 😢 with error: ', error);
}
