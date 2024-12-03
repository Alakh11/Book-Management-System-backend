const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Model {
    static associate(models) {
      // Define associations with unique aliases
      Book.belongsTo(models.Author, {
        as: 'authorDetails', // Unique alias for Author
        foreignKey: 'author_id',
      });
      Book.belongsTo(models.Category, {
        as: 'categoryDetails', // Unique alias for Category
        foreignKey: 'category_id',
      });
    }
  }

  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publishedYear: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );

  return Book;
};
