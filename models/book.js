'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    Book.belongsTo(models.Author, { foreignKey: 'author_id', as: 'author' });
    Book.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
  };

  return Book;
};
