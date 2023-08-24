const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "mySuperSecretKey123";

const pool = new Pool({
  user: "bekbolotzairbekov",
  host: "localhost",
  database: "datadad",
  password: "A525252a",
  port: 5432,
});

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.rows[0].id }, secretKey);
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addUser(req, res) {
  const { username, password } = req.body;

  try {
    // Проверка, существует ли уже пользователь с таким именем
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Хеширование пароля перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);

    // Добавление нового пользователя в базу данных
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashedPassword,
    ]);

    res.json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.rows[0]);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function changeBalance(req, res) {
  const userId = req.params.id;
  const { amount } = req.body;

  try {
    await pool.query("UPDATE users SET balance = balance + $1 WHERE id = $2", [
      amount,
      userId,
    ]);
    res.json({ message: "Balance updated successfully" });
  } catch (error) {
    console.error("Error changing balance:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addTransaction(req, res) {
  const userId = req.params.id;
  const { amount, description, timestamp } = req.body;

  try {
    await pool.query(
      "INSERT INTO transactions (user_id, amount, description, timestamp) VALUES ($1, $2, $3, $4)",
      [userId, amount, description, timestamp]
    );

    await pool.query("UPDATE users SET balance = balance - $1 WHERE id = $2", [
      amount,
      userId,
    ]);

    res.json({ message: "Transaction added successfully" });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  login,
  getUsers,
  getUserById,
  changeBalance,
  addTransaction,
  addUser
};
