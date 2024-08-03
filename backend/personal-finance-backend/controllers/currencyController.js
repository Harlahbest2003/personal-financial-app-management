// controllers/currencyController.js
const axios = require('axios');

exports.convertCurrency = async (req, res) => {
  try {
    const { amount, fromCurrency, toCurrency } = req.body;

    // Replace with your currency conversion API
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const rate = response.data.rates[toCurrency];
    const convertedAmount = amount * rate;

    res.json({ convertedAmount });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
