const express = require('express');
const router = express.Router();
const UserManager = require('../../controllers/user/userManager'); // Assurez-vous que le chemin soit correct

const userManager = new UserManager();

router.get('/', (req, res) => {
    const users = userManager.getUsers();
    res.json(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userManager.getUserById(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.post('/', (req, res) => {
    const { name, job } = req.body;

    if (!name || !job) {
        return res.status(400).json("Name and job are required");
    }

    const newUser = userManager.createUser(name, job);
    res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    userManager.deleteUser(id);
    res.status(204).send('User deleted');
});

module.exports = router;
