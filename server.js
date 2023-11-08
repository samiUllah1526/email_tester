const express = require("express");
const emailSender = require("./emailSender");
require("dotenv").config();

const app = express();

app.get("/health", (_req, res) => {
  res.json("up and running!");
});

app.get("/send_email", async (_req, res) => {
  await emailSender()
  return res.json("Email sent!")
});

app.listen(
  process.env.PORT || 3000,
  () => console.log("Example app just process.env.PORT ", process.env.PORT),

  console.log("Example app listening on port 3000!", process.env.PORT || 3000)
);
