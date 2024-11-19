const express = require('express');
const { registerUser, loginUser,fetchCart,createCart } = require('../controllers/authentication');

const router = express.Router();


router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/add-cart',createCart);

router.get('/get-cart',fetchCart)

module.exports = router;
