import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();

const send = async function ({ mailData }) {
    let transporter = nodemailer.createTransport({
        host : process.env.STMP_CONFIG_HOST,
        port: process.env.STMP_CONFIG_PORT,
        secure: false,
    });

    return await transporter.sendMail({
        from: `Bosta ${process.env.FROM_EMAIL_ADDRESS}`,
        to: mailData.to,
        subject: mailData.subject,
        html: mailData.html,
      });
}

const mailerService = Object.freeze({
    send,
})

export default mailerService
export { send }