const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('news', async (req, res) => {
  try {
    const result = await axios.get('https://https://hacker-news.firebaseio.com/v0', {
      params: {
        ...req.query,
        apiKey: process.env.API_KEY,
      },
    });
    res.send(result.data);
  } catch (error) {
    res.status(500).json({
      message: 'An error occured while getting news.Try again later.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
  });
}
