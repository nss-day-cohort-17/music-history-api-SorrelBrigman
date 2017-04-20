'use strict';

// <require the express Router>
const {Router} = require('express');
const songRouter = Router();
// <require the songCtrl to get access to its methods>
const {getSongs, getASong, addSong, deleteSong, editSong } = require('../controllers/songCtrl.js');
// <define routes for getting all songs and a single song>

songRouter.get('/songs', getSongs);
songRouter.post('/songs/new', addSong);
songRouter.get('/songs/:SongId', getASong);
songRouter.patch('/songs/:SongId', editSong);
songRouter.delete('/songs/:SongId', deleteSong);

// <stretch: define routes for posting, deleting, editing a song>


module.exports = songRouter;
