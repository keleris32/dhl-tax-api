import config from './config';
import { app } from './app';

const startServer = (port: string) => {
  try {
    if (config.env === 'development') {
      app.listen(port, () =>
        console.log(
          `Server is running succesfully on port ${port} 🚀. Connected to ${config.DB}`
        )
      );
    } else {
      app.listen(port);
    }
  } catch (error) {
    console.error(`Server crashed 😢 with error: ${error}`);
    process.exit(1);
  }
};

startServer(config.PORT || '4000');
