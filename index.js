require('dotenv').config();
const express = require('express');
const app = express();

// use either the .env port (for local) OR Render's port
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/secPage', (req, res) => {
  res.send('Hello we!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
