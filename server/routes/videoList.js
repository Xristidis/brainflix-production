const fs = require('fs');
const express = require('express');
const videoListData = require('../data/videoList.json');

const router = express.Router();

// When we make a GET request to `localhost:8080/videoList/` this is what will get triggered
router.get('/', (req, res) => {
    res.json(videoListData);
});

router.post('/', (req, res) => {
    // Destructuring `body` out of the request object
    // Equivalent to saying `const body = req.body;`
    const { body } = req;
    videoListData.push(body.newVideoForList);
    fs.writeFileSync("./data/videoList.json", JSON.stringify(videoListData, null, 2));
    res.status(201).json(videoListData);
});
module.exports = router;
