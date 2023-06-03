import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';
import Ingredient from './Ingredient';

interface InventoryAttributes {
  id: number;
  product_id: number;
  quantity: number;
  ingredients: boolean;
  deleted: boolean;
  purchased_price: number;
}

interface InventoryCreationAttributes extends Optional<InventoryAttributes, 'id'> {}

class Inventory extends Model<InventoryAttributes, InventoryCreationAttributes> implements InventoryAttributes {
  public id!: number;
  public product_id!: number;
  public quantity!: number;
  public ingredients!: boolean;
  public deleted!: boolean;
  public purchased_price!: number;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    purchased_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: 'inventories',
    timestamps: true,
    sequelize,
  }
);

Inventory.hasMany(Ingredient, { foreignKey: 'inventory_id' });
Ingredient.belongsTo(Inventory, { foreignKey: 'inventory_id' });

export default Inventory;
