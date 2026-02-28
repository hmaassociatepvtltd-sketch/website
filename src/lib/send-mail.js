'use server';
import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = "email-smtp.us-east-1.amazonaws.com";
const SMTP_SERVER_USERNAME = "hmaassociatepvtltd@gmail.com";
const SMTP_SERVER_PASSWORD = "nnxh uegh ytih mbuw";
const SITE_MAIL_RECIEVER = "hmaassociates269@gmail.com";
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}) {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const info = await transporter.sendMail({
    from: email,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}