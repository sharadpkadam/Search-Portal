import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ksharad210@gmail.com",
    pass: "wutjivdjcsrmxsed",
  },
});

const sendMail = (to, sub, msg) => {
  return transporter.sendMail({
    from: 'ksharad210@gmail.com',
    to: to,
    subject: sub,
    html: msg,
  })
}

export default sendMail;
