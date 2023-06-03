import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('stock_opname', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      initial_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sales: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      incoming_goods: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      returned_goods: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      final_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      actual_stock: {
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
    await queryInterface.dropTable('stock_opname');
  },
};
