'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contaOrigemId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Accounts'
          },
          key: 'id'
        },
        allowNull: false
      },
      contaDestinoId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Accounts'
          },
          key: 'id'
        },
        allowNull: false
      },
      saldo: {
        type: Sequelize.DECIMAL(10, 2) 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transfers');
  }
};