const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
