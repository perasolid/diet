const jwt = require('express-jwt');
const jwtPermissions = require('express-jwt-permissions');

let unprotectedRoutes = ['/login', '/register', '/resend-verification-email',
    '/verifyAccount', '/verifyRecaptcha']
    .map(relativeRoute => '/users' + relativeRoute);      
unprotectedRoutes.push('/sign-in','/register', '/home');

module.exports.checkUserAuthentication = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
}).unless({
    path: unprotectedRoutes
});

module.exports.adminGuard = jwtPermissions({
    requestProperty: 'payload',
    permissionsProperty: 'role'
}).check('admin');