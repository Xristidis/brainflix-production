const express = require("express");
// const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// Routes - these routes will only work properly if you have the `module.exports` statement in these files
const videoListRoutes = require('./routes/videoList.js');
const allVideosRoutes = require('./routes/allVideos.js');

//Middleware
app.use(express.json());
// app.use(cors());

// Test route (go to https://localhost:5000/ in your browser 
app.get('/', (req, res) => {
    res.send('refactored serverside');
});

// Any routes that begin with /allVideos will be handled with allVideosRoutes
app.use("/allVideos", allVideosRoutes);
// Any routes that begin with /videoList will be handled with videoListRoutes
app.use("/videoList", videoListRoutes);

// serves build folder for heroku https://www.youtube.com/watch?v=e1LaekAnVIM

declarationapp.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname, "client/build")));
modeif(process.env.NODE_ENV === 'production'); {
    app.use(express.static(path.join(__dirname, 'client/build')));


    app.get('*', (req, res) => { res.sendfile(path.join(__dirname = 'client/build/index.html')); })
}
// app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// just added below
modeapp.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/client/public/index.html')); })

serverapp.listen(port, (req, res) => { console.log(`server listening on port: ${port}`); })

// app.listen(port, () => console.log(`On ${port}`));

// app.listen(port, () => {
//     console.log(`Server is up on port ${port}!`);
// });