import express from 'express';

const app = express();

app.get('/api', (_req, res) => {
  res.status(201).send("Welcome to DHL's Tax API! 🚀");
});

export { app };
