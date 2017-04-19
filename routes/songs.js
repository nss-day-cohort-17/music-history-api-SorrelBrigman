'use strict';

// <require the express Router>
const {Router} = require('express');
const songRouter = Router();
// <require the songCtrl to get access to its methods>
const {} = require('../controllers/songCtrl.js');
// <define routes for getting all songs and a single song>

songRouter.get('/songs/:id', getASong);
songRouter.get('/songs', getSongs);

// <stretch: define routes for posting, deleting, editing a song>


module.exports = songRouter;
