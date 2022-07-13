const express = require('express');
const router = express.Router();

const userController= require('../controllers/User.controller');

router.get('/',userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.get('/search/:name/:email',userController.searchUserByParams);

router.post('/',userController.addUser);

router.put('/:id' ,userController.updateUser);

router.delete('/:id',userController.removeUser);

module.exports= router;