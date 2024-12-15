const express = require('express');
const { createLinkToken, exchangePublicToken, getBalances, getTransactions } = require('../controllers/controller');
const router = express.Router();

router.post('/link-token', createLinkToken);
router.post('/public-token', exchangePublicToken);
router.post('/balances', getBalances);
router.post('/transactions', getTransactions);

module.exports = router;
