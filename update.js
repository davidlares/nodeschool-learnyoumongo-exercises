var mongo = require('mongodb').MongoClient;
var dName = process.argv[2];

mongo.connect(`mongodb://localhost:27017/${dName}`,function(err, db){
	
	db.db(dName).collection('users').update({
		"name": "Tina",
		"age": 30,
		"username": "tinatime"
	},{
		$set: {
			"age": 40
		}
	},function(err,data){
		if(err) throw err;
		console.log(data);
		db.close();
	});
});