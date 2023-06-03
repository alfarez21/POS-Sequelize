import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addConstraint('transactions', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'fk_transaction_customer',
      references: {
        table: 'customers',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });  

    await queryInterface.addConstraint('transactions', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_transaction_user',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('transactions', {
      fields: ['coupon_id'],
      type: 'foreign key',
      name: 'fk_transaction_coupon',
      references: {
        table: 'coupons',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeConstraint('transactions', 'fk_transaction_customer');
    await queryInterface.removeConstraint('transactions', 'fk_transaction_user');
    await queryInterface.removeConstraint('transactions', 'fk_transaction_coupon');
  }
};
