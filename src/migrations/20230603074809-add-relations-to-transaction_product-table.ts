import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('transaction_products', {
      fields: ['transaction_id'],
      type: 'foreign key',
      name: 'fk_transaction_products_transaction',
      references: {
        table: 'transactions',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('transaction_products', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_transaction_products_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('transaction_products', 'fk_transaction_products_transaction');
    await queryInterface.removeConstraint('transaction_products', 'fk_transaction_products_product');
  }
};
