const jwt = require('express-jwt');
const jwtPermissions = require('express-jwt-permissions');

module.exports.checkUserAuthentication = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
}).unless({
    path: ['/login', '/register', '/resend-verification-email',
        '/verifyAccount', '/verifyRecaptcha'].map(relativeRoute => '/users' + relativeRoute)
});

module.exports.adminGuard = jwtPermissions({
    requestProperty: 'payload',
    permissionsProperty: 'role'
});