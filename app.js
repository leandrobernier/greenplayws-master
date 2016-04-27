var express         = require("express");
    app             = express();
    bodyParser      = require("body-parser");
    methodOverride  = require("method-override");
    mongoose        = require('mongoose');
	
// Connection to DB
mongoose.connect('mongodb://localhost/greenplaydev', function(err, res) {
	if(err) throw err;
	console.log('Connected to Database');
});
	
// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/datagreenplay')(app, mongoose);
var datagreenplayCtrl = require('./controllers/datagreenplay');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  //res.send("Hello world!");
});
app.use(router);

// API routes
var datagreenplay = express.Router();

datagreenplay.route('/datagreenplay')
  .get(datagreenplayCtrl.findAllDataGreenplay)
  .post(datagreenplayCtrl.addDataGreenplay);
  
datagreenplay.route('/datagreenplay/:id')
  .get(datagreenplayCtrl.findByIdDataGreenplay)
  .put(datagreenplayCtrl.updateDataGreenplay)
  .delete(datagreenplayCtrl.deleteDataGreenplay);
 
app.use('/', datagreenplay);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


