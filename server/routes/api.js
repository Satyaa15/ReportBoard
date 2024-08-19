const express = require('express');
const axios = require('axios'); // Axios is a popular HTTP client for making requests
const router = express.Router();

// API endpoint to fetch data from the third-party API
router.get('/api/products', async (req, res) => {
  try {
    // Make a GET request to the third-party API
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    
    // Send the data back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from third-party API:', error);
    res.status(500).json({ message: 'Error fetching data from third-party API' });
  }
});

module.exports = router;
