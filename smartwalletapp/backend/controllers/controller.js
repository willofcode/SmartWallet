const plaid = require('plaid');

const plaidClient = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments[process.env.PLAID_ENV],
});

// Generate Link Token
exports.createLinkToken = async (req, res) => {
  try {
    const response = await plaidClient.createLinkToken({
      user: { client_user_id: 'unique_user_id' },
      client_name: 'Plaid React App',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    res.json({ linkToken: response.link_token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Exchange Public Token
exports.exchangePublicToken = async (req, res) => {
  const { publicToken } = req.body;
  try {
    const response = await plaidClient.exchangePublicToken(publicToken);
    res.json({ accessToken: response.access_token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Account Balances
exports.getBalances = async (req, res) => {
  const { accessToken } = req.body;
  try {
    const response = await plaidClient.getBalance(accessToken);
    res.json(response.accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Transactions
exports.getTransactions = async (req, res) => {
  const { accessToken, startDate, endDate } = req.body;
  try {
    const response = await plaidClient.getTransactions(accessToken, startDate, endDate);
    res.json(response.transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
