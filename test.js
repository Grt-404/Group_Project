const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

function sum(a, b) {
  return a + b;
}

app.listen(3000, () => {
  console.log('Server is running');
});

//npm run format  ----> use this to beautifully format the code 