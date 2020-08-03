const fs = require('fs');
const express = require('express');
const videoListData = require('../data/videoList.json');

const router = express.Router();

// When we make a GET request to `localhost:5000/videoList/` this is what will get triggered
router.get('/', (req, res) => {
    res.json(videoListData);
});

router.post('/', (req, res) => {
    // Destructuring `body` out of the request object
    // Equivalent to saying `const body = req.body;`
    // const { body } = req;
    // console.log(req.body);
    // console.log(videoListData);
    videoListData.push(req.body);
    fs.writeFileSync("../data/videoList.json", JSON.stringify(videoListData));
    res.status(201).json(videoListData);
});
module.exports = router;
