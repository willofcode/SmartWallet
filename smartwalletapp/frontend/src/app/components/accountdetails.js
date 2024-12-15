import React from 'react';

const AccountDetails = ({ accounts }) => {
  return (
    <div>
      <h2>Account Balances</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.account_id}>
            {account.name}: ${account.balances.available || account.balances.current}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountDetails;
