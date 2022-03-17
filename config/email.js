var nodemailer = require('nodemailer');

var transport;
if (process.env.NODE_ENV === 'test') {
    transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '02231501925661',
            pass: '61cbb1dce65639'
        }
    });
} else {
    transport = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true, //ssl
        auth: {
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    });
}
module.exports = {
    transport
}