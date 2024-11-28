'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Category.associate = (models) => {
    Category.hasMany(models.Book, { foreignKey: 'category_id', as: 'books' });
  };

  return Category;
};
