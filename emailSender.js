const nodemailer = require("nodemailer");
const fs = require("fs").promises;
require("dotenv").config();

async function readFileAsync(filePath) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(filePath, "utf8");
    console.log("File contents:", data);
    return data;
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDINBLUE_USER_EMAIL,
    pass: process.env.SENDINBLUE_USER_PASSWORD,
  },
});

async function main() {
  const filePath = "./template.html";
  const template = await readFileAsync(filePath);
  const info = await transporter.sendMail({
    from: '"Test Email 👻" <test@example.com>', // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: "Hello there ✔", // Subject line
    //   text: "Hello world?", // plain text body
    html: template, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = main;
