const express = require('express');
const router = express.Router();
const app = express();
const dotenv = require('dotenv');
dotenv.config();





router.get('/hello', function (req, res) {
  res.send('Hello World!');
});
app.use(`/${process.env.VERSION}`, router);
app.listen(3000, function () {
  console.log(process.env.VERSION);
  console.log('Example app listening on port 3000!');
});