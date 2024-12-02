const express = require('express');
const { Book, Author, Category } = require('./models');
const Sequelize = require('sequelize');

const router = express.Router();

// Search books by title or author
router.get('/books/search', async (req, res) => {
  const query = req.query.query;
  try {
    const books = await Book.findAll({
      where: {
        [Sequelize.Op.or]: [
          { title: { [Sequelize.Op.like]: `%${query}%` } },
          { author: { [Sequelize.Op.like]: `%${query}%` } }
        ]
      }
    });
    res.json(books);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
