'use strict'

// <require express Router and require the songs.js router file>
const {Router} = require(express);
const songRouter = require('./songs.js');
const router = Router();

// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)
router.get('/', function(req, res) {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:3000/api/v1/songs",
    "songsById": "http://localhost:3000/api/v1/songs/:id"
  });
});

router.use(songRouter);


module.exports = router;
