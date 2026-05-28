// 1. MUST BE FIRST: Load environment variables
require('dotenv').config();

// 2. MUST BE SECOND: Import the packages
const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');

// 3. MUST BE THIRD: Initialize the Express application
const app = express();

// 4. Setup Middleware
app.use(cors()); 
app.use(express.json());

// 5. Initialize the Gemini AI client
const genAI = new GoogleGenAI(process.env.API_KEY || '');

// 6. Chat Route
app.post('/api/chat', async (req, res) => {
  try {
    console.log("👉 Message received from Angular:", req.body.message);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(req.body.message);
    const response = await result.response;
    
    res.json({ text: response.text() });
    console.log("✅ Response successfully sent to Angular!");

  } catch (error) {
    console.error("❌ AI Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// 7. Start the Server on Port 5000 (Clears any old 3000 blocks)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 AI Server is running on http://localhost:${PORT}`);
});
