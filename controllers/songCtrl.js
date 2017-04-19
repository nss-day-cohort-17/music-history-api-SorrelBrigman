'use strict'

const {bookshelf} = require('../db/database.js');
const Song = require('../models/song.js')
// <require a song model>


module.exports.getSongs = (req, res, next) => {
  Song.getAllSongs()
  .then((songs)=> {
    res.status(200).json(songs);
  })
  .catch((err)=> {
    next(err);
  })
}

module.exports.getASong = ({params: {SongId}}, res, next) => {
  Song.getSong(SongId)
  .then((song) => {
    res.status(200).json(song);
  })
  .catch((err) => {
    next(err);
  })
}

// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>
