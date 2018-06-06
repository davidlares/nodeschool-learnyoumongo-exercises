var mongo = require('mongodb');
var client = mongo.MongoClient;
var dbName = process.argv[2];
var collection = process.argv[3];
var url = `mongodb://localhost:27017/${dbName}`;

client.connect(url, function(err,db){
	if(err) throw err;
	db.db(dbName).collection(collection).remove({
		"_id": process.argv[4]
	}, function(err,data){
		console.log(data);
		db.close();
	})
})