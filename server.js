const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const { Author, Category, Book } = require('./models');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(morgan('tiny'));
app.use(express.json());

// CORS setup
const corsOptions = {
  origin: 'http://localhost:4200', // Angular dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Sequelize setup
const sequelize = new Sequelize('book_management_system', 'book_management_system', '12345678', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
});

sequelize.authenticate().then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Routes for Books (directly defined here)
app.get('/', (req, res) => {
  res.send('Welcome to the Book Management System API!');
});

app.get('/api/books', async (req, res) => {
   // res.redirect('/books');
  try {
    const books = await Book.findAll({ 
        include: [
            { model: Author, as: 'author' }, // Use alias 'author'
            { model: Category, as: 'category' } // Use alias 'category'
          ]
        });
    res.json(books);
  } catch (err) {
    console.error('Error fetching books:', err.message || err);
    res.status(500).send(`Error fetching books: ${err.message || err}`);
  }
});

app.get('/api/books/search', async (req, res) => {
    const query = req.query.query;
    try {
      const books = await Book.findAll({
        where: {
          [Sequelize.Op.or]: [
            { title: { [Sequelize.Op.like]: `%${query}%` } },
            { '$author.name$': { [Sequelize.Op.like]: `%${query}%` } } // Use alias for author name
          ]
        },
        include: [
          { model: Author, as: 'author' }, // Use alias for author
          { model: Category, as: 'category' } // Use alias for category
        ]
      });
      res.json(books);
    } catch (err) {
      res.status(500).send('Server error');
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

// Import and use routes from bookRoutes.js
const bookRoutes = require('./bookRoutes'); // Ensure this is the correct path
app.use('/api', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
