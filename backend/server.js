import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

console.log(" Backend is running on port 6000...");

app.post("/auth/callback", async (req, res) => {
    console.log("Received request at /auth/callback with body:", req.body);

    const { token } = req.body;
    if (!token) {
        console.error(" Token is missing!");
        return res.status(400).json({ error: "Token missing" });
    }

    try {
        const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log(" Auth0 Response:", response.data);
        
        const userEmail = response.data?.email;
        console.log("Extracted Email:", userEmail);

        if (!userEmail) {
            console.error(" Email not found in Auth0 response!");
            return res.status(400).json({ error: "Email not found" });
        }
    } catch (error) {
        console.error(" Error fetching user info:", error.response?.data || error.message);
        return res.status(500).json({ error: "Failed to verify token" });
    }
});

app.listen(6000, () => console.log("Server running on port 6000"));
