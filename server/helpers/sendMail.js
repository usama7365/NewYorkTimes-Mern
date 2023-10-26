const nodemailer = require("nodemailer");

const SendMail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },proc
    });

    const mailOptions = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};

module.exports = SendMail;