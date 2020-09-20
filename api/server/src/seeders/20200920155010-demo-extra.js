'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Extras', [
      {
        name: 'Queijo',
        price: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ovo',
        price: 1,createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Extras', null, {});
  }
};