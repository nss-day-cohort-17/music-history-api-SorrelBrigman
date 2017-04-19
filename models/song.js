'use strict'

const {bookshelf} = require('../db/database')
// <Define a model using bookshelf that describes a song object, as well as

const Song = bookshelf.Model.extend({
  tableName: "Song"
},
{
  getAllSongs: () => {
    console.log("get all the songs");
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((err)=> {
      return error;
    })
  },
  getASong: (id) => {
    console.log("get a song by id")
    return this.forge({id})
    .fetch()
    .then((song)=>{
      return song;
    })
    .catch((err) => {
      return err;
    })
  }
})

// static methods for getting one or all songs from the db>

// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection

module.exports = ('Song', Song);
