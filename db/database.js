// <Setup the configuration module for knex and bookshelf>

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);
const bookshelf =require('bookshelf')(knex);


bookshelf.plugin('registry');

module.exports = {knex, bookshelf};


// I have already run 'knex init' at the root of this project to create the knexfile.js.
// The music history database lives right here as a document in this project, so note
// that the devlopment configuration sets that environment to use sqlite instead of postgres.

// No need to make migrations, since the db and tables already exist
