const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

// 1. You MUST define 'app' here before using it
const app = express();

// 2. Now it is safe to use 'app'
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ message: response.choices.message.content });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to connect to OpenAI' });
  }
});

app.listen(3000, () => console.log('🚀 SERVER READY ON PORT 3000'));
