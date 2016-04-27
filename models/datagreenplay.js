exports = module.exports = function(app, mongoose) {

	var datagreenplaySchema = new mongoose.Schema({
	  name:  { type: String },
	  age: { type: String },
	  status:	{ type: String }
	}, {collection: 'localization' });

	mongoose.model('DATAGreenplaydevSch', datagreenplaySchema);

};
