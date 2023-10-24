const express = require('express');
const router = express.Router();
const UserManager = require('./userManager');

const userManager = new UserManager();

userManager.createUser("Clement", "Chef de projet");
userManager.createUser("Antoine", "Developpeur full stack");
userManager.createUser("François", "developpeur IA");
userManager.createUser("Tristan", "Data Analyste");
userManager.createUser("Mehdi", "Developpeur d'application mobile");


router.get('/users', (req, res) => {
  const users = userManager.getUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = userManager.getUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

//création user
router.post('/users', (req,res) => {
    const { name, job } = req.body;

    if(!name || !job) {
        return res.status(400).json("nom et job requis")
    }
    const newUser = userManager.createUser(name, job);
    res.status(201).json(newUser);
});

//delete user

router.delete

module.exports = router;