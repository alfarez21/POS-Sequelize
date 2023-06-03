import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('balances', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_balance_user',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('balances', 'fk_balance_user');
  }
};
