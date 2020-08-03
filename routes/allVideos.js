const fs = require('fs');
const express = require('express');

// This just loads the allVideos.json data into memory as a variable called videoListData
// Any changes we make to this videoListData variable will NOT persist when the server restarts
const allVideosData = require('../data/allVideos.json')

const router = express.Router();

// When we make a GET request to `localhost:5000/api/allVideos/` this is what will trigger
router.get('/', (req, res) => {
    res.json(allVideosData);
});

router.get("/:id", (req, res) => {
    res.json(allVideosData.find(videoObj => {
        return req.params.id === videoObj.id;
    })
    );
});

router.post('/', (req, res) => {
    allVideosData.push(req.body.newVideo);
    fs.writeFileSync("../data/allVideos.json", JSON.stringify(allVideosData, null, 2));
    return res.status(201).send(true);
});

module.exports = router;