var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(objectId) {
    try {
        return new ObjectId(objectId).toHexString() === objectId
    } catch {
        return false
    }
}