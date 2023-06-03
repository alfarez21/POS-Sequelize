import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('coupons', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_type: {
        type: DataTypes.ENUM('percentage', 'price'),
        allowNull: false,
      },
      expired_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minimum_purchase: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maximum_usage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('coupons');
  },
};
