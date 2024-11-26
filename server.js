const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const { Author, Category, Book } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Management System API!');
});

// Routes for Books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.findAll({ include: [Author, Category] });
    res.json(books);
  } catch (err) {
    res.status(500).send('Error fetching books');
  }
});

app.post('/api/books', async (req, res) => {
  try {
    const { title, author_id, category_id, publishedYear, isbn } = req.body;
    const newBook = await Book.create({ title, author_id, category_id, publishedYear, isbn });
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).send('Error adding book');
  }
});

app.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    await book.destroy();
    res.status(200).send('Book deleted successfully');
  } catch (err) {
    res.status(500).send('Error deleting book');
  }
});

// Sync sequelize models
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const cors = require('cors');
app.use(cors());  // Allow requests from all origins
