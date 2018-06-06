var mongo = require('mongodb').MongoClient;
var dbName = 'learnyoumongo';
var url = `mongodb://localhost:27017/${dbName}`;

mongo.connect(url, function(err,db) {
	
	db.db(dbName).collection('prices')
	
	.aggregate([

		{ $match: { size: process.argv[2] } },
		{ $group: {
			_id: 'average', // es necerario
			average: {
				$avg: '$price'
			}
		}} 
	
	]).toArray(function(err,data){
		if(err) throw err;
		console.log(Number(data[0].average).toFixed(2));
		db.close();
	});

});