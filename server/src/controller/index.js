const router = require('express').Router();

const { isFound } = require('../middleware/isFound.js');


router.post('/login', isFound);
