const jwt = require('express-jwt');

module.exports.checkUserAuthentication = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
}).unless({
    path: ['/login', '/register', '/resend-verification-email',
        '/verifyAccount', '/verifyRecaptcha'].map(relativeRoute => '/users' + relativeRoute)
});

module.exports.adminGuard = require('express-jwt-permissions')({
    requestProperty: 'payload',
    permissionsProperty: 'role'
})