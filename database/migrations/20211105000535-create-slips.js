'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Slips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      banco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      localPagamento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      agenciaCedente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigoCedente: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataDocumento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      numeroDocumento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      especie: {
        type: Sequelize.STRING
      },
      aceite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataProcessamento:  {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      usoBanco: {
        type: Sequelize.STRING
      }, 
      carteira: {
        allowNull: false,
        type: Sequelize.STRING
      },
      especieMoeda: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vencimento:	 {
        allowNull: false,
        type: Sequelize.STRING
      },
      valordocumento: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2) 
      },
      instrucoes:	 {
        type: Sequelize.STRING
      },
      mensagem1: {
        type: Sequelize.STRING
      },	
      mensagem2: {
        type: Sequelize.STRING
      },	
      mensagem3: {
        type: Sequelize.STRING
      },
      sacado: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Slips');
  }
};
