const { Pool } = require('pg');

const pool = new Pool({
  user: 'bekbolotzairbekov',
  host: 'localhost',
  database: 'datadad',
  password: 'A525252a',
  port: 5432,
});

async function getTransactions(req, res) {
  try {
    const transactions = await pool.query('SELECT * FROM transactions');
    res.json(transactions.rows);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getTransactionById(req, res) {
  const transactionId = req.params.id;

  try {
    const transaction = await pool.query('SELECT * FROM transactions WHERE id = $1', [transactionId]);

    if (transaction.rows.length === 0) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.json(transaction.rows[0]);
  } catch (error) {
    console.error('Error fetching transaction by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getTransactions,
  getTransactionById,
};
