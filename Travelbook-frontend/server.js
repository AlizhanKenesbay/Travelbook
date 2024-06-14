const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(history());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
