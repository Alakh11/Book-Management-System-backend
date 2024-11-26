const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Book } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Routes
app.post('/api/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add the book.' });
    }
});

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books.' });
    }
});

app.put('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const [updatedRows] = await Book.update(updatedData, { where: { id } });
        if (updatedRows) res.json({ message: 'Book updated successfully.' });
        else res.status(404).json({ error: 'Book not found.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the book.' });
    }
});

app.delete('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await Book.destroy({ where: { id } });
        if (deletedRows) res.json({ message: 'Book deleted successfully.' });
        else res.status(404).json({ error: 'Book not found.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the book.' });
    }
});

// Start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
