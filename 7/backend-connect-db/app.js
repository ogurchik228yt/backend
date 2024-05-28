const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require("./routes/api");
const connectToDatabase = require('./database/connect');
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const cors = require('./middlewares/cors');

const PORT = 3001;

const app = express();

connectToDatabase();

app.use(
  cors, 
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});