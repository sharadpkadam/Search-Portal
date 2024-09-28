import express from "express";
import booking from "../models/sendMail.js"; 
import sendMail from "./bookingMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { hallId, name, mobile, email, date } = req.body;

  try {
    await booking.create({ hallId, name, mobile, email, date });

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ error: "Email address is required." });
    }

    await sendMail(email, "Booking Confirmation", `Hi ${name}, your booking is confirmed for ${date}.`);
    return res.status(200).json({ message: "Booking email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email.", details: error.message });
  }
});

export default router;
