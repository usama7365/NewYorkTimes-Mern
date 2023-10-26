const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken"); 
const { getTopStoriesController } = require("../controllers/top.stories..controller");

router.get('/top-stories',verifyToken,  getTopStoriesController);

module.exports = router;
