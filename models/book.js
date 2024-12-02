'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Book.associate = (models) => {
    // Define alias for the author association
    Book.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author' // Use alias 'author'
    });
    Book.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category' // Use alias 'category'
    });
  };

  return Book;
};
