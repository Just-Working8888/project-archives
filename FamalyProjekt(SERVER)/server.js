const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Pool } = require('pg');
const fs = require('fs');
const app = express();

const userController = require('./controllers/userController');
const transactionController = require('./controllers/transactionController');
const authMiddleware = require('./middlewares/authMiddleware');

const secretKey = 'mySuperSecretKey123'; // Замените на свой секретный ключ

// Подключаемся к базе данных PostgreSQL
const pool = new Pool({
  user: 'bekbolotzairbekov',
  host: 'localhost',
  database: 'datadad',
  password: 'A525252a',
  port: 5432,
});

pool.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch((err) => {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  });

// Настройка multer для загрузки файлов
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());

// Роуты для аутентификации и защищенные маршруты
app.post('/login', userController.login);
app.get('/protected', authMiddleware.authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route!' });
});

// Роуты для пользователей
app.post('/users', userController.addUser);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users/:id/balance', authMiddleware.authenticateToken, userController.changeBalance);
app.post('/users/:id/transactions', authMiddleware.authenticateToken, userController.addTransaction);

// Роуты для транзакций
app.get('/transactions', transactionController.getTransactions);
app.get('/transactions/:id', transactionController.getTransactionById);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
