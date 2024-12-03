const express = require('express');
const router = express.Router();
const { Book, Author, Category } = require('./models');

router.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        { model: Author, as: 'author' },
        { model: Category, as: 'category' },
      ],
    });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
router.post('/books', async (req, res) => {
    try {
      const { title, author, genre, publishedYear, isbn } = req.body;
  
      // Validate required fields
      if (!title || !author || !genre) {
        return res.status(400).json({ error: 'Title, author, and genre are required.' });
      }
  
      // Find or create the author
      const [authorRecord] = await Author.findOrCreate({
        where: { name: author },
        defaults: { name: author },
      });
  
      // Find or create the category/genre
      const [categoryRecord] = await Category.findOrCreate({
        where: { name: genre },
        defaults: { name: genre },
      });
  
      // Create the book
      const newBook = await Book.create({
        title,
        author_id: authorRecord.id,
        category_id: categoryRecord.id,
        publishedYear,
        isbn,
      });
  
      res.status(201).json(newBook);
    } catch (error) {
      console.error('Error saving book:', error);
      res.status(500).json({ error: 'Failed to save book.' });
    }
  });
module.exports = router;