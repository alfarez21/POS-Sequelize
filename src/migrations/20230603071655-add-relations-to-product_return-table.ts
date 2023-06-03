import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('product_return', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_product_return_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('product_return', {
      fields: ['transaction_id'],
      type: 'foreign key',
      name: 'fk_product_return_transaction',
      references: {
        table: 'transactions',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('product_return', 'fk_product_return_product');
    await queryInterface.removeConstraint('product_return', 'fk_product_return_transaction');
  }
};
