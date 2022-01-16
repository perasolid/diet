module.exports = {
    database:'mongodb+srv://'+process.env.NAME+':'+process.env.PASSWORD+'@basecluster.x9rc0.mongodb.net/'+process.env.DATABASE_NAME+'?retryWrites=true&w=majority'
}