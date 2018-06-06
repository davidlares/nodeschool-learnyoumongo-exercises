var mongo = require('mongodb');
var client = mongo.MongoClient;
var dbName = 'learnyoumongo';
var url = `mongodb://localhost:27017/${dbName}`;

client.connect(url, function(err,db){
	if(err) throw err;
	db.db(dbName).collection('parrots').count({
		age: {
			$gt: +process.argv[2]
		}
	},function(err,count) {
		console.log(count);
		db.close()
	});
});