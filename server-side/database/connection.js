const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI || "mongodb+srv://development:hS7KqtjHLfZins2G@cluster0.ginyqsx.mongodb.net/?retryWrites=true&w=majority";
console.log("DB", Db);
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("mern-app");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};