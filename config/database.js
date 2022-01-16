var config = require('../config');

module.exports = {
    database:'mongodb+srv://'+process.env.config.mongo.name+':'+process.env.config.mongo.password+'@basecluster.x9rc0.mongodb.net/'+process.env.config.mongo.database_name+'?retryWrites=true&w=majority'
}