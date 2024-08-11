const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  // Configure your PostgreSQL connection settings
  host: 'ruby.db.elephantsql.com',
  port: 5432,
  user: 'jbysgdig',
  password: 'fyzoSh0mhfJFKAQkwGJE-ZD0U51yS_nU',
  database: 'jbysgdig ',
});

app.post('/api/cars', async (req, res) => {
  try {
    const { make, model, year, color, price, mileage } = req.body;

    const query = 'INSERT INTO cars (make, model, year, color, price, mileage) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [make, model, year, color, price, mileage];

    const result = await pool.query(query, values);
    const newCar = result.rows[0];

    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ error: 'An error occurred while adding the car' });
  }
});

app.get('/api/cars', async (req, res) => {
  try {
    const query = 'SELECT * FROM cars';
    const result = await pool.query(query);
    const cars = result.rows;

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error retrieving cars:', error);
    res.status(500).json({ error: 'An error occurred while retrieving cars' });
  }
});

// Add more API endpoints as needed for updating and deleting cars

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

