const express = require('express');
const router = express.Router();
const UserManager = require('./userManager');

const userManager = new UserManager();

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
router.delete('/users/:id', (req, res) => {
    
})
router.delete

module.exports = router;