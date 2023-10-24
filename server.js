const express = require('express');
const app = express();
const colleagues = require('./data');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/colleagues', (req, res) => {
    res.json(colleagues);
});

app.get('/colleagues/:id', (req, res) => {
    const id = parseInt(req.params["id"]);
    res.json(id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
