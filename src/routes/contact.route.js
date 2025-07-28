const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.model.js");
const sendEmail = require("../utils/sendEmail.js");
const { emailTemplate } = require("../utils/emailTemplate.js");

// POST /api/contact
router.post("/", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, enquiryType, message } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !enquiryType || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newContact = new Contact({ firstName, lastName, email, phoneNumber, enquiryType, message });
        await newContact.save();

        // Send Email Notification
        const res1 = await sendEmail({
            to: process.env.NOTIFY_EMAIL,
            subject: "📥 New Contact Form Submission",
            html: emailTemplate(firstName + " " + lastName, email, message),
        });
        // console.log(res1);

        return res.status(201).json({ success: true, message: "Contact saved successfully" });
    } catch (error) {
        console.error("Error saving contact:", error);
        return res.status(500).json({ error: "Internal Server error" });
    }
});

module.exports = router;