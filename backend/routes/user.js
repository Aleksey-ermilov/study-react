const express = require("express");
const userController = require("../controllers/user");

let router = express.Router();

router.post("/registration", userController.reg);

router.post("/authorization", userController.auth);

router.post('/editUser', userController.editUser);

router.post('/editHome', userController.postEditHome);

router.get('/editHome/:id', userController.getEditHome);

module.exports =  router;


/* home.js

* router.get('/')
  router.post('/')
  router.put('/:id')
  router.delete('/:id')

* */
