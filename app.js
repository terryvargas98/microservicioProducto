const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./src/config/db')
    //Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

//routes
const Routes = require('./src/routes/producto');
app.use('/service', Routes);


app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(6000, function() {
    console.log('App is running, server is listening on port 6000');
});