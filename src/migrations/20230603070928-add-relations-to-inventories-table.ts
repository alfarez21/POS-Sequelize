import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('inventories', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_inventory_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('inventories', 'fk_inventory_product');
  }
};
