import express from 'express';
const app = express();
import 'dotenv/config';
const { PORT } = process.env;

app.use(express.json());
app.listen(3000, () => console.log(`Server listening on port ${PORT}`));
