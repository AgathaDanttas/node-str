"use strict"

const express = require("express");
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/',controller.post);
router.put('/',controller.put);
router.delete('/',controller.delete);
router.get('/',controller.get);

module.exports = router;
