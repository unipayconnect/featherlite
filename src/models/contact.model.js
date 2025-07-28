const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        phoneNumber: { type: String, required: true, trim: true },
        enquiryType: { type: String, enum: ["landOwner", "broker", "investor", "vendor"], required: true, trim: true },
        message: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
