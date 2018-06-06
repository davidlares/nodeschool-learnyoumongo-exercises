var mongo = require('mongodb').MongoClient;
var dbName = 'learnyoumongo';

mongo.connect(`mongodb://localhost:27017/${dbName}`, 
	
	function(err, db) {

		if(err) throw err;
		let dataBase = db.db(dbName);

		var obj = {
		
			firstName: process.argv[2],
			lastName: process.argv[3]	
		}

		dataBase.collection('docs')
			.insertOne(obj, function(err,data) {
				if(err) throw err;
				console.log(JSON.stringify(data.ops[0]));
				db.close();
		});
	});