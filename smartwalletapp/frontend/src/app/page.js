import React, { useState } from 'react';
import { createLinkToken, exchangePublicToken, getBalances, getTransactions } from './services/api';
import AccountDetails from './components/accountdetails';
import Transactions from './components/transactions';

function App() {
  const [linkToken, setLinkToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleLinkToken = async () => {
    const token = await createLinkToken();
    setLinkToken(token);
  };

  const handlePlaidLinkSuccess = async (publicToken) => {
    const token = await exchangePublicToken(publicToken);
    setAccessToken(token);
    const accountsData = await getBalances(token);
    setAccounts(accountsData);
    const transactionsData = await getTransactions(token, '2024-01-01', '2024-12-31');
    setTransactions(transactionsData);
  };

  return (
    <div>
      <h1>Plaid React App</h1>
      {!linkToken && <button onClick={handleLinkToken}>Create Link Token</button>}
      {linkToken && (
        <button onClick={() => handlePlaidLinkSuccess('your-public-token')}>
          Simulate Link Success
        </button>
      )}
      <AccountDetails accounts={accounts} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
