const { Pool } = require('pg');

const pool = new Pool({
  user: 'bekbolotzairbekov',
  host: 'localhost',
  database: 'datadad',
  password: 'A525252a',
  port: 5432,
});

class User {
  static async findByUsername(username) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      return user.rows[0];
    } catch (error) {
      console.error('Error fetching user by username:', error);
      throw new Error('Error fetching user');
    }
  }

  static async findById(id) {
    try {
      const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return user.rows[0];
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Error fetching user');
    }
  }
  
  // Другие методы модели, например, для создания, обновления и удаления пользователей
}

module.exports = User;
