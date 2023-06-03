import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('setting', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      app: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      store: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address_one: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      address_two: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      contact: {
        type: DataTypes.STRING(14),
        allowNull: true,
      },
      tax: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      currency_symbol: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      footer: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      token_balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      token_cut_balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    await queryInterface.dropTable('setting');
  },
};
