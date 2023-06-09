import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';
import Product from './Product';
import Inventory from './Inventory';

interface IngredientAttributes {
  id: number;
  product_id: number;
  inventory_id: number;
  quantity: number;
  deleted: boolean;
}

interface IngredientCreationAttributes extends Optional<IngredientAttributes, 'id'> {}

class Ingredient extends Model<IngredientAttributes, IngredientCreationAttributes> implements IngredientAttributes {
  public id!: number;
  public product_id!: number;
  public inventory_id!: number;
  public quantity!: number;
  public deleted!: boolean;
}

Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    tableName: 'ingredients',
    timestamps: true,
    sequelize,
  }
);

Ingredient.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(Ingredient, { foreignKey: 'product_id' });

Ingredient.belongsTo(Inventory, { foreignKey: 'inventory_id' });
Inventory.hasMany(Ingredient, { foreignKey: 'inventory_id' });

export default Ingredient;
