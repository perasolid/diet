mongoose = require('mongoose');
express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const logger = require('morgan');
var passport = require('passport');
const fs = require('fs');
const join = require('path').join;

const models = join(__dirname, '/models');

// Load models
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));

// Load services
const users = require('./routes/users');
const nutritions = require('./routes/nutrition');
const user_nutrition = require('./routes/user_nutrition');
const dri = require('./routes/dri');

const app=express();
// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to database: ' + config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Error with connection to database: ' + err);
});

require('./config/passport');

app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.use(cors());
app.use(express.static(join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());

// Nasted routes from services
app.use('/users', users);
app.use('/nutritions', nutritions);
app.use('/user-nutrition', user_nutrition);
app.use('/dri', dri);

app.get('**', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

module.exports = app;