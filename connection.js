const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'db_Hackmap';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);


  console.log(db.users.find());

});



const insertUser = function(db, us_id, us_usname, us_email, us_password, us_name, us_secname, us_avatar, us_hackathons, us_teams, us_frinends, callback) {

  // Get the documents collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertOne(
    {id: us_id, usname: us_usname, email: us_email, password: us_password, name: us_name, secondName: us_secname, avatar: us_avatar, hackathons: us_hackathons, teams: us_teams, friend: us_frinends},
    (err, result) => {
      if(err){
        console.log('Unable insert user: ', err);
        throw err;
      } else {
        console.log("Inserted 1 document into the collection");

      }
      callback(result);
    }
  );

}

const findUsers = function(db, us_email, us_password, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({}).toArray(function(err, users) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(users)
    callback(users);

  });
}


const removeUser = function(db, us_id, us_usname, us_email, us_password, us_name, us_secname, us_avatar, us_hackathons, us_teams, us_frinends, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Delete document where a is 3
  collection.deleteOne({id: us_id, usname: us_usname, email: us_email, password: us_password, name: us_name, secondName: us_secname, avatar: us_avatar, hackathons: us_hackathons, teams: us_teams, friends: us_frinends}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}


const updateUser = function(db, us_id, us_usname, us_email, us_password, us_name, us_secname, us_avatar, us_hackathons, us_teams, us_frinends, callback){
  const collection = db.collection('users');

  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}
