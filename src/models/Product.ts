import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize from '../sequelize';

import Category from './Category';
import Inventory from './Inventory';
import TransactionProduct from './TransactionProduct';
import Ingredient from './Ingredient';



interface ProductAttributes {
  id: number;
  category_id: number;
  variant: number;
  barcode: string;
  price: number;
  quantity: number;
  name: string;
  stock: boolean;
  image: string;
  use_ingredients: boolean;
  unit_type: string;
  deleted: boolean;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public category_id!: number;
  public variant!: number;
  public barcode!: string;
  public price!: number;
  public quantity!: number;
  public name!: string;
  public stock!: boolean;
  public image!: string;
  public use_ingredients!: boolean;
  public unit_type!: string;
  public deleted!: boolean;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    }
  },
  {
    tableName: 'products',
    timestamps: true,
    sequelize,
  }
);

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

Product.hasMany(Inventory, { foreignKey: 'product_id' });
Inventory.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(TransactionProduct, { foreignKey: 'product_id' });
TransactionProduct.belongsTo(Product, { foreignKey: 'product_id' });

Product.belongsToMany(Ingredient, { through: Inventory, foreignKey: 'product_id' });
Ingredient.belongsToMany(Product, { through: Inventory, foreignKey: 'inventory_id' });

export default Product;
