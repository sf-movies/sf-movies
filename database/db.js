const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/sfdata';

MongoClient.connect(url, function(err, db) {
  assert.equal(err, null);
  console.log('Looks like we have successfully\nconnected to MongoDB!');

  var collection = db.collection('sf');
  var movie = //TODO: Get movie title to this variable

  collection.distinct(movie, function(err, docs) {
    if (err) {
      console.log("Looks like we got an error: ", err);
    } else {
      docs.forEach(function(value) {
        console.log(value);
        db.close();
      })
    }
  })
});
