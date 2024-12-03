module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  
    Author.associate = (models) => {
      Author.hasMany(models.Book, {
        foreignKey: 'author_id',
        as: 'books', // Alias for reverse association
      });
    };
  
    return Author;
  };
  