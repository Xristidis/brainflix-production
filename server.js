const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// Routes - these routes will only work properly if you have the `module.exports` statement in these files
const videoListRoutes = require('./routes/videoList.js');
const allVideosRoutes = require('./routes/allVideos.js');

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/client/build")));

// Test route (go to https://localhost:5000/ in your browser 
app.get('/api/', (req, res) => {
    res.send('refactored serverside');
});

// Any routes that begin with /allVideos will be handled with allVideosRoutes
app.use("/api/allVideos", allVideosRoutes);
// Any routes that begin with /videoList will be handled with videoListRoutes
app.use("/api/videoList", videoListRoutes);

// serves build folder for heroku https://www.youtube.com/watch?v=e1LaekAnVIM

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => console.log(`On ${port}`));

// app.listen(port, () => {
//     console.log(`Server is up on port ${port}!`);
// });