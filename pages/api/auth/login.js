import db from '../../../lib/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Fetch user from database
      const user = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        });
      });

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      // Compare passwords
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (isValidPassword) {
        // In a real app, you would set a session or token here
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(400).json({ error: 'Invalid password' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error during login' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}