var config = require('../config');

module.exports = {
    database:'mongodb+srv://'+config.mongo.name+':'+config.mongo.password+'@basecluster.x9rc0.mongodb.net/'+config.mongo.database_name+'?retryWrites=true&w=majority'
}