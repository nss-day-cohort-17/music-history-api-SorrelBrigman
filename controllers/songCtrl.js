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

module.exports.addSong = ({body}, res, next) => {
  Song.forge({
    // body
    "Title": "Barney and Friends",
    "SongLength": 89,
    "ReleaseDate": "12/12/2912",
    "GenreId": 5,
    "ArtistId": 10,
    "AlbumId": 33
  })
  .save()
  .then(()=> res.status(201).json({"msg": "Song added"}))
  .catch((error) => {
    next(error)
  })
}

module.exports.deleteSong = ({params: {SongId}}, res, next) => {
  console.log("SongId", SongId)
  Song.where({SongId})
  .destroy()
  .then((song)=> res.status(202).json(song))
  .catch((err)=> {
    next(err)
  })
}

module.exports.editSong = ({params: {SongId}}, res, next) => {
    console.log("trying to edit a song")
    Song.getSong(SongId)
    .then((songFromSeach) => {
      console.log("thissong", songFromSeach);
      let editedSong = songFromSeach.toJSON();
      editedSong.Title = "Silly Bears";
      console.log("editSong", editedSong)
      Song.where({SongId})
      .save(editedSong, {method: 'update'})
      .then(()=> res.status(201).json({"msg": "Song editted"}))
      .catch((error) => {
        next(error)
      })
    })
    .catch((err) => {
      next(err);
    })

}


// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>
