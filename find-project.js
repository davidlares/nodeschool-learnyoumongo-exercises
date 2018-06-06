var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var url = `mongodb://localhost:27017/${dbName}`;
var age = process.argv[2];

mongo.connect(url,function(err, db) {
	if(err) return err;

	// objeto db para mongoDB 3
	let dataBase = db.db(dbName);

	dataBase.collection('parrots')
	.find({
		age: {
			$gt: +age  // key greater than age
		}
	},{
		// projection
		name: 1,
		age: 1,
		projection: {_id: 0}
	})
	.toArray(function(err, docs){
		if(err) throw err;
		// imprimiendo el resultado
		console.log(docs);
		db.close();	// close connection after selects
	})

})