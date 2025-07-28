const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { ALLOWED_ORIGIN } = require("./src/constants/allowedOrigin.js");

dotenv.config();

const app = express();

const corsOptions = {
    origin: ALLOWED_ORIGIN,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/v1/contact", require("./src/routes/contact.route.js"));

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
