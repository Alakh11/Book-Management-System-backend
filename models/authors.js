'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Author.associate = (models) => {
    Author.hasMany(models.Book, { foreignKey: 'author_id', as: 'books' });
  };

  return Author;
};
