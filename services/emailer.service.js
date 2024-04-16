
const { text } = require('body-parser');
var nodemailer = require('nodemailer');

async function sendEmail(params,callback){
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user:"anshvar2002@gmail.com", pass: "khaq bwng oity noyn"},
    });
    var mailOptions={
        from:'anshvar2002@gmail.com',
        to:params.email,
        subject:params.subject,
        text:params.body,
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            return callback(error);
        }else{
            return callback(null,info.response);
        }
    });

    
}
module.exports={
    sendEmail
}