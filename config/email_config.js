var nodemailer = require('nodemailer');

module.exports = {
    transport: nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true, //ssl
        auth: {
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    })
}