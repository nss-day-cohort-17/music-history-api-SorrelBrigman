'use strict';

// <require the express Router>
const {Router} = require('express');
const songRouter = Router();
// <require the songCtrl to get access to its methods>
const {getSongs, getASong, addSong, deleteSong, editSongTitle} = require('../controllers/songCtrl.js');
// <define routes for getting all songs and a single song>

songRouter.get('/songs', getSongs);
songRouter.get('/songs/:SongId', getASong);
songRouter.post('/songs/new', addSong);
songRouter.patch('/songs/title/:SongId', editSongTitle);
songRouter.delete('/songs/:SongId', deleteSong);

// <stretch: define routes for posting, deleting, editing a song>


module.exports = songRouter;
