const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/',
  userController.verifyUser, 
  (req, res) => {
    res.status(200).json({ ...res.locals.result });
  }
);

module.exports = router;