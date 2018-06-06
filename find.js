var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var url = `mongodb://localhost:27017/${dbName}`;
var age = parseInt(process.argv[2]);

mongo.connect(url, function(err,db) {

	if(err) return err;
	// objeto DB para MongoDB 3
	let dataBase = db.db(dbName);
	
	dataBase.collection('parrots').find({
		age: {
			$gt: +age
		}
	}).toArray(function(err, docs){
		
		if(err) throw err;
		console.log(docs);
		
	});

	db.close();

});