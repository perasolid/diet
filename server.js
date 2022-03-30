const app = require('./app');

// Start server on process port if specified, otherwise 8080
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server started on port: " + port);
});