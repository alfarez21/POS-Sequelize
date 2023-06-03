import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('transactions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_type: {
        type: DataTypes.ENUM('price', 'percentage'),
        allowNull: false,
      },
      order_number: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      ref_number: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      tax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sub_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment_info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      change: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      token_cut_balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('transactions');
  },
};
