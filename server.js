const express = require('express');
const app = express();
const userController = require('./src/controllers/user/userController');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userController);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});