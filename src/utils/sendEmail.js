const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    return await transporter.sendMail({
        from: `"Featherlite Developers" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
    });
};

module.exports = sendEmail;