import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('ingredients', {
      fields: ['product_id'],
      type: 'foreign key',
      name: 'fk_ingredient_product',
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('ingredients', {
      fields: ['inventory_id'],
      type: 'foreign key',
      name: 'fk_ingredient_inventory',
      references: {
        table: 'inventories',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('ingredients', 'fk_ingredient_product');
    await queryInterface.removeConstraint('ingredients', 'fk_ingredient_inventory');
  }
};
