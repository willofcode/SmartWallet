import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transaction_id}>
            {transaction.date} - {transaction.name}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
