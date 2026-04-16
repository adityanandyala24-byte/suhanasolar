const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create leads table
    db.run(`CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      pincode TEXT,
      property_type TEXT,
      roof_type TEXT,
      capacity_estimate TEXT,
      message TEXT,
      source TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Routes
app.post('/api/leads', (req, res) => {
  const {
    name,
    phone,
    email,
    pincode,
    property_type,
    roof_type,
    capacity_estimate,
    message,
    source
  } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  const sql = `INSERT INTO leads (name, phone, email, pincode, property_type, roof_type, capacity_estimate, message, source)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [name, phone, email, pincode, property_type, roof_type, capacity_estimate, message, source || 'Contact Form'];

  db.run(sql, params, function (err) {
    if (err) {
      console.error('Error inserting lead:', err.message);
      return res.status(500).json({ error: 'Failed to save lead.' });
    }
    
    res.status(201).json({
      message: 'Lead safely secured.',
      leadId: this.lastID
    });
  });
});

app.get('/api/leads', (req, res) => {
  db.all('SELECT * FROM leads ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve leads.' });
    }
    res.json(rows);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Suhana Solar backend running on http://localhost:${PORT}`);
});
