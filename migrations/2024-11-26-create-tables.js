module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Authors', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        bio: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
  
      await queryInterface.createTable('Categories', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
  
      await queryInterface.createTable('Books', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        author_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Authors',
            key: 'id'
          }
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          }
        },
        publishedYear: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        isbn: {
          type: Sequelize.STRING,
          allowNull: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Books');
      await queryInterface.dropTable('Categories');
      await queryInterface.dropTable('Authors');
    }
  };
  