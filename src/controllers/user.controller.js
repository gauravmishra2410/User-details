const express = require('express');

const User = require('../models/user.model');

const router = express.Router();

// ..................CRUD APIs for user................//
// post:- create a  user
router.post('', async (req, res) => {
  const user = await User.create(req.body); // db.users.insert

  return res.status(201).send({ user });
});

// // get :- get all users
router.get('', async (req, res) => {
  const users = await User.find().lean().exec(); // db.users.find()

  return res.status(200).send({ users });
});

// //patch :- update a user
router.patch('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); //db.users.update({_id: ""}, {$set: {}})

  return res.status(200).send({ user });
});

// delete :- delete a single user
router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id); //db.users.delete({_id: ""})

  return res.status(200).send({ user });
});

// get :- a single user
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).lean().exec(); // db.users.findOne({_id: ""})

  return res.status(200).send({ user });
});

module.exports = router;
