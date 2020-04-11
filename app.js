const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API');
});

bookRouter.route('/books').get((req,res) => {
  const responce = { hello: 'This is my api' };
  res.json(responce);
})
app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`App listning on http://localhost:${port}`);
});
