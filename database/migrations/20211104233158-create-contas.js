'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Clientes'
          },
          key: 'id'
        },
        allowNull: false
      },
      banco: {
        type: Sequelize.STRING
      },
      agencia: {
        type: Sequelize.STRING
      },
      conta: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Contas');
  }
};