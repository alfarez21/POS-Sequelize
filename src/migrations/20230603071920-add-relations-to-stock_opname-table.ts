import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('stock_opname', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_stock_opname_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('stock_opname', 'fk_stock_opname_product');
  }
};
