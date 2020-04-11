const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API');
});

app.listen(port, () => {
  console.log(`App listning on http://localhost:${port}`);
});
