import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(123),
        allowNull: false,
      },
      permissions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('users');
  },
};
