const express = require('express');
const app = express();
const port = 3005;

app.use(express.static('./client/dist'));

app.get('/api/cows', (req, res) => {
  res.status(200);
  res.send(`this should get some data from the db`);
});

app.post('/api/cows', (req, res) => {
  res.status(201);
  res.send(`this should add data to the db`);
});

app.listen(port, () => console.log(`Cowlist app listening on port ${port}!`));
