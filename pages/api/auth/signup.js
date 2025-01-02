import db from '../../../lib/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, confirmPassword } = req.body;

    console.log('Signup attempt with email:', email);

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      console.log('Attempting to insert user:', email);

      // Insert user into database
      await new Promise((resolve, reject) => {
        db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], function(err) {
          if (err) {
            console.error('Error inserting user:', err);
            reject(err);
          } else {
            console.log('User inserted with ID:', this.lastID);
            resolve(this.lastID);
          }
        });
      });

      console.log('User created successfully');
      res.status(201).json({ message: 'User created successfully', userId: this.lastID });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}