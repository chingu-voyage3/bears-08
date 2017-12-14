import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { registerHashService } from '../services/registerHashService';

const app = express();

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { password } = req.body;
  const hash = registerHashService(password);
  req.body.password = hash;
  res.send(req.body);
});

app.listen(process.env.port || 3001, 'localhost');
