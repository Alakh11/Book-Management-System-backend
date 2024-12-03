module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  
    Category.associate = (models) => {
      Category.hasMany(models.Book, {
        foreignKey: 'category_id',
        as: 'books', // Alias for reverse association
      });
    };
  
    return Category;
  };
  