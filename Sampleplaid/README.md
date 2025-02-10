
## Sample implementation for Plaid Sandbox

## dependencies

- Node.js and npm installed.
- A Plaid account with `PLAID_ID` and `PLAID_SECRET` keys.

## Installation

1. Clone the repository:

```bash

cd nodejs-plaid
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:

```env
PLAID_ID=your_plaid_id
PLAID_SECRET=your_plaid_secret
```

Replace `your_plaid_id` and `your_plaid_secret` with your actual Plaid API keys.

4. Start the server:

```bash
node server.js
```

## Usage

1. Open `index.html` in your preferred web browser.
2. Click on the "Link Bank account" button to initiate the Plaid authentication flow.
3. Once authenticated, click on the "Get transactions" button to fetch and view your transactions on the page.

