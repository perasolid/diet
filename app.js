mongoose = require('mongoose');
express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const logger = require('morgan');
const fs = require('fs');
const join = require('path').join;
const routeProtection = require('./routes/route-protection');
const cron = require('node-cron');
const https = require('https');

// Load models
const models = join(__dirname, '/models');
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));

// Passport uses User model
require('./config/passport');

// Load services
const users = require('./routes/users');
const nutritions = require('./routes/nutrition');
const userNutrition = require('./routes/user-nutrition');
const dri = require('./routes/dri');
const compositeFood = require('./routes/composite-food');

const app = express();

// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('Connected to database: ' + config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Error with connection to database: ' + err);
});


app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.use(cors());
app.use(express.static(join(__dirname,'public')));
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(routeProtection.checkUserAuthentication);

// Nasted routes from services
app.use('/users', users);
app.use('/nutritions', nutritions);
app.use('/user-nutrition', userNutrition);
app.use('/dri', dri);
app.use('/composite-food', compositeFood);

app.get('**', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

cron.schedule('*/12 * * * *', () => {
  https.get("https://mydiet.onrender.com", res => {
    console.log('statusCode:', res.statusCode);
  });
  console.log(new Date().toLocaleString());
});

module.exports = app;