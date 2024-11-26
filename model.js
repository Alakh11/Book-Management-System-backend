const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('bms', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    publishedYear: { type: DataTypes.DATEONLY, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = { sequelize, Book };
