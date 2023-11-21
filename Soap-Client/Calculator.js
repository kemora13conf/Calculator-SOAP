import express from "express";
import MySoapClient from "./Soap-client.js";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = new express();

app.use(express.json());

app.post("/calculator", async (req, res) => {
  const { method, args } = req.body;
  const soap = new MySoapClient();
  let result;
  if (method === "add") {
    result = await soap.add(args);
  } else if (method === "subtract") {
    result = await soap.subtract(args);
  }
  res.send(result);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/', express.static(path.join(__dirname, './Public/')));
app.use('/assets', express.static(path.join(__dirname, './dist/')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Public/Calculator.html');
});

app.listen(4040, () => {
  console.log(`Server is running on port http://localhost:4040`);
});