const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Ruta principal - Página de inicio
app.get('/', (req, res) => {
  res.json({
    message: 'Request Header Parser Microservice',
    usage: 'Go to /api/whoami to see your header information',
    example: 'https://your-app.onrender.com/api/whoami'
  });
});

// Endpoint para FreeCodeCamp
app.get('/api/whoami', (req, res) => {
  // Obtener IP address
  const ip = req.headers['x-forwarded-for'] || 
             req.connection.remoteAddress || 
             req.socket.remoteAddress;
  
  const response = {
    ipaddress: ip ? ip.replace(/^::ffff:/, '') : 'Unknown',
    language: req.headers['accept-language'] || 'Unknown',
    software: req.headers['user-agent'] || 'Unknown'
  };
  
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
