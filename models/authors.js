'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING, // Use DataTypes.STRING instead of sequelize.STRING
        allowNull: false,
      },
    },
    {
      timestamps: false, // Disable createdAt and updatedAt
    }
  );

  Author.associate = (models) => {
    Author.hasMany(models.Book, { foreignKey: 'author_id', as: 'books' });
  };

  return Author;
};
