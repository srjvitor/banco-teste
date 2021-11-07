'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TransferTypes', [
    {
      descricao: 'Transferência entre contas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Depósito em conta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Depósito teste',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TransferTypes', null, {});
  }
};
