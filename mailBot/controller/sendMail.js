const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'madisyn.macejkovic@ethereal.email',
            pass: 'hP2HKWRkFR5y9jGrN1'
        }
    });

    let info = await  transporter.sendMail({
        from: '"Kirtan Prajapati 👻" <madisyn.macejkovic@ethereal.email>', // sender address
        to: "govengoven316@gmail.com", // list of receivers
        subject: "Hello Brother 😃✨🎉", // Subject line
        text: "Hello, I am just learning mailBot", // plain text body
        html: "<b> Hii 👀 How are you? 👽☠😈 </b>", // html body
    });

    console.log("Message Sent: ", info.messageId);

    res.json(info);
}

module.exports = sendMail;