import express from "express";
import cors from "cors";

import "./db"; // Connect to DB

const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming request body to JSON

app.get("/api", (_req, res) => {
	res.status(201).send("Welcome to DHL's Tax API! 🚀");
});

export { app };
