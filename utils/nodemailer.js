const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.Mail_PORT,
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_SECRET,
  },
});

const sendMail = async (
  options = { to: "", from: process.env.MAIL_ADDRESS }
) => {
  const mailSent = await transporter.sendMail({
    to: options.to,
    from: options.from,
    subject: options.subject,
    html: options.html,
    text: options.text,
  });
  return {
    receivers: mailSent.accepted,
    status: mailSent.response,
    messageId: mailSent.messageId,
  };
};

module.exports = { transporter, sendMail };
