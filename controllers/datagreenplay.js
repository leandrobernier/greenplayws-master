//File: controllers/DataGreenplay.js
var mongoose = require('mongoose');
var DATAGreenplaydevSch  = mongoose.model('DATAGreenplaydevSch');

//GET - Return all DataGreenplay in the DB
exports.findAllDataGreenplay = function(req, res) { 

    DATAGreenplaydevSch.find(function(err, datagreenplay) {
    if(err) res.send(500, err.message);
    res.status(200).jsonp(datagreenplay);
    console.log('GET /DataGreenplay')

    });
};

//POST - Insert a new DataGreenplay in the DB
exports.addDataGreenplay = function(req, res) {
	console.log('POST');

	var datagreenplay = new DATAGreenplaydevSch({		
		name:    req.body.name,
		age: 	  req.body.age,
		status:  req.body.status
	});

	console.log('datagreenplay : ' + datagreenplay.id);
	
	datagreenplay.save(function(err, datagreenplay) {
	if(err) return res.send(500, err.message);
    res.status(200).jsonp(datagreenplay);
	console.log('POST /datagreenplay/');
		
	});
};

//DELETE - Delete a DataGreenplay with specified ID
exports.deleteDataGreenplay = function(req, res) {
	console.log(req.params.id);
	DATAGreenplaydevSch.findById(req.params.id, function(err, datagreenplay) {
	datagreenplay.remove(function(err) {
	if(err) return res.send(500, err.message);
		res.status(200);
		console.log('DELETE /datagreenplay/' + req.params.id);
		})
	});
};

//GET - Return a DataGreenplay with specified ID
exports.findByIdDataGreenplay = function(req, res) {  
	console.log(req.params.id);
	DATAGreenplaydevSch.findById(req.params.id, function(err, datagreenplay) {
    if(err) return res.send(500, err.message);
    console.log('GET /datagreenplay/' + req.params.id);
		res.status(200).jsonp(datagreenplay);
	});
};

//PUT - Update a register with specified ID
exports.updateDataGreenplay = function(req, res) {
	DATAGreenplaydevSch.findById(req.params.id, function(err, datagreenplay) {
		datagreenplay.name   = req.body.name;
		datagreenplay.age    = req.body.age;
		datagreenplay.status = req.body.status;

		datagreenplay.save(function(err) {
			if(err) return res.send(500, err.message);			
			res.status(200).jsonp(datagreenplay);
			console.log('PUT /datagreenplay/' + req.params.id);
		});
	});
};





