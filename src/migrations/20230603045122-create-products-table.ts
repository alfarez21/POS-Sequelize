import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      variant: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      barcode: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(125),
        allowNull: false,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      use_ingredients: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      unit_type: {
        type: DataTypes.STRING(20),
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
    await queryInterface.dropTable('products');
  },
};
