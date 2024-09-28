import nodemailer from 'nodemailer';

const sendMail = async (req, res) => {
  const { hallId, name, mobile, date } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'smtp.ethereal.email', // or your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'ksharad210@gmail.com', // Replace with recipient email
    subject: 'New Booking Request',
    text: `Booking Details:\nHall ID: ${hallId}\nName: ${name}\nMobile: ${mobile}\nDate: ${date}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Booking successful!');
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
};

export default sendMail;


