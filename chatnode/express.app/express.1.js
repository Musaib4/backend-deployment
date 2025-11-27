const express = require('express');
const app = express();   // express() returns an app
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
