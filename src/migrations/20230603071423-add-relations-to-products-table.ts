import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('products', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'fk_product_category',
      references: {
        table: 'categories',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('products', 'fk_product_category');
  }
};
