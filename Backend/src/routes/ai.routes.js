const express = require('express');
const router = express.Router();
const ai = require("../controllers/ai.controllers")

router.post('/get-response',ai.getContent)

module.exports =router;