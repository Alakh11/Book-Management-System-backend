const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./author');
const Category = require('./category');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Book.belongsTo(Author, { foreignKey: 'author_id' });
Book.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Book;
